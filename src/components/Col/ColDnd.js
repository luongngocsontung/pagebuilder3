import { Col } from 'antd'
import './ColDnd.css'

export default function ColDnd({data, ...props}) {
    return (
        <Col 
            id={data.id} 
            className='col'
            flex={data.flex} 
            style={data.style}
            draggable
            {...props}
        > 
            {props.value}
            {props.children}
        </Col>
    )
}
