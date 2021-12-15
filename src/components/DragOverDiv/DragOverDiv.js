import { createSubscription, useSubscription } from 'global-state-hook'
import './DragOverDiv.css'

const dragOver = createSubscription({
    visibility: 'hidden',
    height: null,
    top: null,
    left: null
})

export default function DragOverDiv() {
    const {state} = useSubscription(dragOver)
    return (
        <div className='dragOver' style={state}>
            
        </div>
    )
}

export {dragOver};