import React from "react"
import "./ImageInfiniteSlider.css"

import defaultImg from "../../Assets/Images/memes.png"

export default function ImageInfiniteSlider({ orientation }) {
    return (
        <div className="image-slider-root">
            <img className={" " + orientation } src={defaultImg} alt="" />
            <img className={" " + orientation } src={defaultImg} alt="" />
            <img className={" " + orientation } src={defaultImg} alt="" />
            <img className={" " + orientation } src={defaultImg} alt="" />
        </div>
    )
}