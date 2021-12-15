// import Slider from '@ant-design/react-slick'
import { Col,Slider } from 'antd'
import React from 'react'

export default function FontSize({value, onFontSizeChange}) {
    return (
        <>
            <Col>Font Size</Col>
            <Slider 
                value={value?Number.parseInt(value):16}
                max={160}
                onChange={onFontSizeChange}
            />  
        </>
    )
}
