import { Col, Input } from 'antd'
import React from 'react'

export default function BackGroundImage({value, onBackgroundImageChange}) {
    return (
        <>
            <Col>Background Image</Col>
            <Input 
                type='url'
                value={value}  
                onChange={onBackgroundImageChange}  
            />
        </>
    )
}
