import React from "react"

export default function Card({src, alt}) {
    return (
        <div className='h-300 w-150 p-10'>
            <img className='hover:cursor-pointer' src={src} alt={alt}></img>
        </div>
    )
}