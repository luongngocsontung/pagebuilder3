// import Slider from '@ant-design/react-slick'
import { Col, Slider } from 'antd'
import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function FontSize({ value, onFontSizeChange }) {
    const [size, setSize] = useState(value);

    const handleFontSizeChange = e => {
        setSize(e+'px');
        onFontSizeChange(e)
    }

    return (
        <>
            <Col>Font Size</Col>
            <Slider
                value={size ? Number.parseInt(size) : 16}
                min={8}
                max={160}
                onChange={handleFontSizeChange}
            />
        </>
    )
}
