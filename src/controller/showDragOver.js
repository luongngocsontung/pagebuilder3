import { dragOver } from "../components/DragOverDiv/DragOverDiv";

const showDragOver = (e, side) => {
    const box = e.target.getBoundingClientRect();
    const height = box.height;
    let left = null;
    let top = box.top+window.scrollY;
    switch(side){
        case 'left':
            left = box.left+window.scrollX;
            break;
        case 'right':
            left = box.left+box.width+window.scrollX;
            break;
        default: 
            break;
    }
    dragOver.updateState({
        visibility: 'visible',
        height: height,
        left: left,
        top: top,
    })
}

const hideDragOver = () => {
    dragOver.updateState({
        visibility: 'hidden',
    })
}

export { showDragOver, hideDragOver }