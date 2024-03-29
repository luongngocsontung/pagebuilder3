import { Row } from "antd";
import './RowDnd.css'

export default function RowDnd({data, ...props}) {
    return (
        <Row 
            className="row" 
            style={data.style}
            draggable
            {...props}
        >
            {props.value}
            {props.children}
        </Row>
    )
}
