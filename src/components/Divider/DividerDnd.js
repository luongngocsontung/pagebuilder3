import { Divider } from 'antd'
import React from 'react'
import './DividerDnd.css'

export default function DividerDnd({data, children, ...props}) {
    return (
        <Divider
            className='divider'
            style={data.style}
            draggable
            {...props}
        />
    )
}
