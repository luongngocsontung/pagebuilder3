import React from 'react'

export default function ImageDnd({ data, children, ...props }) {
    return (
        <img
            className='image'
            src={data.scr}
            alt=''
            style={data.style}
            draggable
            {...props}
        />
    )
}
