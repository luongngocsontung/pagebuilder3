import { HoverDivState } from "../components/HoverDiv/HoverDiv";

const highLightElement = e => {
    const box = e.target.getBoundingClientRect();
    const width = box.width;
    const height = box.height;
    const top = box.top + window.scrollY;
    const left = box.left + + window.scrollX;
    HoverDivState.updateState(
        {
            visibility: 'visible',
            width: width,
            height: height,
            top: top,
            left: left,
        }
    )
}

const unHighLightElement = e => {
    HoverDivState.updateState(
        {
            visibility: 'hidden',
        }
    )
}

export {highLightElement, unHighLightElement};