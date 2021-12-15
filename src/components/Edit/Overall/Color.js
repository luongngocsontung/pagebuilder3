import { Col, Input } from 'antd'
import { useState } from 'react/cjs/react.development'
import getElement from '../../../controller/getElement';

export default function Color({ id }) {
    const element = getElement(id);
    const [color, setColor] = useState(element.state.style.color);

    const handleColorChange = e => {
        setColor(e.target.value)
        const newStyle = { ...element.state.style, color: e.target.value }
        element.updateState({ style: newStyle });
    }

    return (
        <>
            <Col>Content Color</Col>
            <Input
                type='color'
                onChange={handleColorChange}
                value={color ? color : '#000000'}
            />
        </>
    )
}
