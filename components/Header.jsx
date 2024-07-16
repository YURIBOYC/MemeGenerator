import React from "react"
import dodge from "/dodge.png"
export default function Header(){
    return (
        <div className="header-div">
            <img src={dodge} className="iconPic"/>
            <h2>Custom Meme Generator</h2>
        </div>
    )
} 