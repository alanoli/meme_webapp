import React, { useRef } from "react"
import ImageSelector from "./ImageSelector"
import Controls from "./Controls"

import ImageEditor from "./ImageEditor"

import "./CreatorRoot.css"

const { Button } = require("antd")

export default function CreatorRoot() {

    const controlRef = useRef()

    return (
        <div className="creator-root">
            <ImageSelector />
            <ImageEditor ref={controlRef} />
            <Controls ref={controlRef} />
            <div className="image-save-panel">
                <Button onClick={() => controlRef.current.downloadImage()} >Exportar</Button>
                <Button>Cancelar</Button>
            </div>
        </div>
    )
}