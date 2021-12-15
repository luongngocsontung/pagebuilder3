import { Col, Input } from 'antd'
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function BackgroundColor({ value, onBackgroundColorChange }) {
    const [color, setColor] = useState(value)

    const handleBackgroundColorChange = e => {
        setColor(e.target.value);
        onBackgroundColorChange(e);
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
