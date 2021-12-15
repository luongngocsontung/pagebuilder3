// import Slider from '@ant-design/react-slick'
import { Col, Slider } from 'antd'
import React from 'react'
import { useState } from 'react/cjs/react.development'
import getElement from '../../../controller/getElement';

export default function FontSize({ id }) {
    const element = getElement(id)
    const [size, setSize] = useState(element.state.style.fontSize);

    const handleFontSizeChange = e => {
        setSize(e + 'px');
        const newStyle = { ...element.state.style, fontSize: e + 'px' };
        element.updateState({ style: newStyle });
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
