import React from "react"
import "./DraggableImage.css"


export default function DraggableImage(props) {

    function drag(event) {
        event.dataTransfer.setData("src", props.imgSrc)
        console.log(event)
    }

    return (
        <img className="draggable-img" draggable onDragStart={(event) => drag(event)} src={props.imgSrc} alt=""/>
    )
}