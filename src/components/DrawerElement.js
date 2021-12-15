export default function DrawerElement(props) {
    const dragStart = e =>{
        setTimeout(() => 
            props.dragging()
        )
        e.dataTransfer.setData(props.data.type ,JSON.stringify(props.data))
    }

    return (
        <img 
            alt = ""
            src={props.data.urlImg} 
            draggable
            onDragStart={dragStart}   
            style={{marginTop: 20}} 
        />
    )
}