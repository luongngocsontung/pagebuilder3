import React from 'react'

export default function YoutubeVideoDnd({ data, children, ...props }) {
    return (
        <iframe
            className='youtubeVideo'
            title='video'
            src={data.scr}
            style={data.style}
            draggable
            {...props}
        />
    )
}
