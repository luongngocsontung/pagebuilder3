import { selectedDiv } from "../components/SelectedDiv/SelectedDiv"

const showSelectedDiv = (id, e) => {
    const box = e.target.getBoundingClientRect();
    const visibility = id === '0' ? 'hidden' : 'visible';
    const top = box.top + box.height + window.scrollY;
    const left = box.left + box.width/2 + window.scrollX;
    selectedDiv.updateState({
        visibility: visibility,
        top: top,
        left: left,
        id: id
    })
}

const hideSelectedDiv = () =>{
    selectedDiv.updateState({
        visibility: 'hidden'
    })
}

export {showSelectedDiv, hideSelectedDiv};