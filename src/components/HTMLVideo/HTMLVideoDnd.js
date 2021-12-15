import React from 'react'
import './HTMLVideoDnd.css'

export default function HTMLVideoDnd({data, children, ...props}) {
    return (
        <video 
            src={data.scr}
            className='htmlVideo'
            style={data.style}
            draggable
            {...props}
        />
    )
}
