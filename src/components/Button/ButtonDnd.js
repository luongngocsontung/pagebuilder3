import { Button } from "antd";

export default function ButtonDnd({ data, ...props }) {
    return (
        <Button
            id={data.id}
            style={data.style}
            draggable
            {...props}
        >
            <span style={{pointerEvents: 'none'}}>
                {props.value}
            </span>
            {props.children}
        </Button>
    )
}
