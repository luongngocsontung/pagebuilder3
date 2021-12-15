import React from 'react'

export default function ParagraphDnd({ data, ...props }) {
    return (
        <p
            className='paragraph'
            style={data.style}
            draggable
            {...props}
        >
            <span style={{ pointerEvents: 'none' }}>
                {props.value}
            </span>
            {props.children}
        </p>
    )
}
