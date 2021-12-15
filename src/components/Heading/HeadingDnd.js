import React from 'react'

export default function HeadingDnd({ data, ...props }) {
    return (
        <h3
            className='heading'
            style={data.style}
            draggable
            {...props}
        >
            <span style={{ pointerEvents: 'none' }}>
                {props.value}
            </span>
            {props.children}
        </h3>
    )
}
