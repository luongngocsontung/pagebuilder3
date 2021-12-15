import React from 'react'

export default function Wrapper(props) {
    return (
        <div 
            id = {props.data.id}
            style = {props.data.style}
            onDragEnter = {props.onDragEnter}
            onDragLeave = {props.onDragLeave}
            onDrop = {props.onDrop}
            onDragOver = {props.onDragOver}
            onMouseDown = {props.onMouseDown}
        >
            {props.children}
        </div>
    )
}
