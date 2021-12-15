import React from 'react'

export default function SoundcloudDnd({data, children, ...props}) {
    return (
        <iframe
            className='soundcloud'
            title='sound'
            style={data.style}
            draggable
            src={data.scr}
            {...props}
        />
    )
}
