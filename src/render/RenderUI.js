import getElement from "../controller/getElement";
import getParentElement from "../controller/getParentElement";
import ElementComp from "../components/ElementComp";
import elementState from '../data/elementState'
import { v4 as uuidv4 } from 'uuid';
import { createSubscription, useSubscription } from 'global-state-hook'
import { useRef } from "react";
import { highLightElement, unHighLightElement } from "../controller/hightLightElement";
import { showSelectedDiv, hideSelectedDiv } from "../controller/showSelectedDiv";
import { showDragOver, hideDragOver } from "../controller/showDragOver";
import { styleId } from "../components/Edit/RightSideBar/RighSideBar";

export default function RenderUI({ id, ...props }) {
    const { state, setState } = useSubscription(getElement(id))
    const Component = ElementComp[state.type]
    const isDragging = useRef(false);
    const isDroppable = useRef(false);
    const typeDragging = useRef(null);
    const parentElement = id === '0' ? null : getParentElement(state.id);

    const handleMouseDown = e => {
        if (e.target.id === id) {
            showSelectedDiv(id, e)
            styleId.updateState({ id: state.id })
        }
    }

    const handleMouseOver = e => {
        // high light element
        highLightElement(e);
    }

    const handleMouseOut = e => {
        // remove hight light from element
        unHighLightElement();
    }

    const drag = e => {
        if (e.target.id === id) {
            isDragging.current = true;
            //Send data to dropzone
            e.dataTransfer.setData(state.type, JSON.stringify(state));
        }
    }

    const dragEnd = e => {
        if (e.target.id === id) {
            isDragging.current = false;
            hideDragOver();
        }
    }

    const dragEnter = e => {
        if (id === e.target.id) {
            // Get type of dragging Element
            typeDragging.current = e.dataTransfer.types[0] === 'text/plain' ? e.dataTransfer.types[3] : e.dataTransfer.types[0];
        }
    }

    const dragLeave = e => {

    }

    const drop = e => {
        if (id === e.target.id && !isDragging.current) {
            e.preventDefault();
            // Get data from dragging Element
            const elementDragging = JSON.parse(e.dataTransfer.getData(typeDragging.current));
            // Set up for new Element
            if (elementDragging.id == null) {
                elementDragging.id = uuidv4();
                elementState.push(createSubscription(elementDragging));
            }
            // deleted draggingElement from its' old parent
            else {
                const parentElement = getParentElement(elementDragging.id);
                const index = parentElement.state.childrenId.findIndex(id => id === elementDragging.id);
                parentElement.state.childrenId.splice(index, 1);
                parentElement.updateState({ childrenId: parentElement.state.childrenId });
            }
            // get rectangle bounding of dropzone
            const box = e.target.getBoundingClientRect();
            // Mouse Pos at dropZone
            const posX = e.pageX - box.left;
            // Put dragging Element next to dropzone
            if (posX <= 10) {
                splice(0, elementDragging.id)
            }
            else if (posX >= box.width - 10) {
                splice(1, elementDragging.id)
            }
            //Put dragging Element inside dropzone
            else {
                const temp = state.childrenId;
                temp.push(elementDragging.id);
                setState({ childrenId: temp })
            }
            hideDragOver();
            hideSelectedDiv();
            e.dataTransfer.clearData();
        }
    }

    const splice = (i, elementId) => {
        const index = parentElement.state.childrenId.findIndex(id => id === state.id);
        parentElement.state.childrenId.splice(index + i, 0, elementId);
        parentElement.updateState({ childrenId: parentElement.state.childrenId })
    }

    const dragOver = e => {
        if (e.target.id === state.id) {
            const box = e.target.getBoundingClientRect();
            const posX = e.pageX - box.left;
            if (id === "0" && (posX <= 10 || posX >= box.width - 10)) {
                // UNDROPPABLE
                hideDragOver();
                isDroppable.current = false;
            }
            else {
                if (posX <= 10 || posX >= box.width - 10) {
                    if (parentElement.state.childrenType.includes(typeDragging.current)) {
                        e.preventDefault();
                        isDroppable.current = true;
                        if (posX <= 10)
                            showDragOver(e, "left");
                        else
                            showDragOver(e, "right");
                    }
                    else {
                        hideDragOver();
                        isDroppable.current = false;
                    }
                }
                else {
                    hideDragOver();
                    if (state.childrenType.includes(typeDragging.current)) {
                        e.preventDefault();
                        isDroppable.current = true;
                    }
                    else {
                        isDroppable.current = false;
                    }
                }
            }
            isDroppable.current ? highLightElement(e) : unHighLightElement();
        }
    }

    const elements = state.childrenId.map(idC => {
        return <RenderUI key={idC} id={idC} />
    })
    return (
        <Component
            id={state.id}
            data={state}
            value={state.childrenId.length ? null : state.value}
            onDragStart={drag}
            onDragEnd={dragEnd}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={drop}
            onDragOver={dragOver}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onMouseDown={handleMouseDown}
        >
            {elements}
        </Component>
    )
}