import { Col, Input } from 'antd'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import getElement from '../../../controller/getElement'

export default function BackgroundColor({ id }) {
    const element = getElement(id)
    const [color, setColor] = useState(element.state.style.backgroundColor)

    const handleBackgroundColorChange = e => {
        setColor(e.target.value);
        const newStyle = { ...element.state.style, backgroundColor: e.target.value };
        element.updateState({ style: newStyle });
    }

    return (
        <>
            <Col>Background Color</Col>
            <Input
                type='color'
                value={color ? color : '#ffffff'}
                onChange={handleBackgroundColorChange}
            />
        </>
    )
}
