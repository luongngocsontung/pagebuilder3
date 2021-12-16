import "./SelectedDiv.css"
import {DeleteOutlined} from '@ant-design/icons'
import { createSubscription, useSubscription } from "global-state-hook";
import getParentElement from "../../controller/getParentElement";
import { hideSelectedDiv } from "../../controller/showSelectedDiv";

const selectedDiv = createSubscription({
    visibility: "hidden",
    left: null,
    top: null,
    id: null
})

export default function SelectedDiv() {
    const {state} = useSubscription(selectedDiv)
    const handleDeleteElement = e => {
        const parent = getParentElement(state.id);
        const index = parent.state.childrenId.findIndex(id => id===state.id);
        parent.state.childrenId.splice(index, 1);
        parent.updateState({childrenId: parent.state.childrenId});
        hideSelectedDiv();
    }

    return (
        <div className="selectedWrapper" style={state}>
            <div>
                <button onClick={handleDeleteElement}>
                    <DeleteOutlined/>
                </button>
            </div>
        </div>
    )
}

export {selectedDiv}