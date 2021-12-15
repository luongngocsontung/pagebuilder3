import { Col, Input } from 'antd'
import React from 'react'

export default function BackgroundColor({value, onBackgroundColorChange}) {
    return (
        <>
            <Col>Background Color</Col>
            <Input 
                type='color'
                value={value? value: '#ffffff'}
                onChange={onBackgroundColorChange}
            />   
        </>
    )
}
