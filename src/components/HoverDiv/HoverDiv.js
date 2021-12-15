import { createSubscription, useSubscription } from 'global-state-hook'
import './HoverDiv.css'

const HoverDivState = createSubscription({
    visibility: 'hidden',
    width: null,
    height: null,
    left: null,
    top: null,
})

export default function HoverDiv() {
    const {state} = useSubscription(HoverDivState)

    return (
        <div id="hoverDiv" style={state}>
            
        </div>
    )
}


export {HoverDivState}