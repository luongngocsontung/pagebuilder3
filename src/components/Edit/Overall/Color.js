import { Col, Input } from 'antd'
import { useState } from 'react/cjs/react.development'

export default function Color({ value, onColorChange }) {
    const [color, setColor] = useState(value);

    const handleColorChange = e => {
        setColor(e.target.value)
        onColorChange(e);
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
