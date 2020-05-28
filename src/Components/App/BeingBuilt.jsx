import React from "react"
import "./BeingBuilt.css"


const beingBuiltImage = require("../../Assets/Images/beingBuiltImage.jpg")

export default function BeingBuilt() {
    return (
        <div className="being-built">
            <h1>Página em construção</h1>
            <img src={beingBuiltImage} />
        </div>
    )
}