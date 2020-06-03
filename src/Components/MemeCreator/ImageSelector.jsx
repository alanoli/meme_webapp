import React from "react"
import DraggableImage from "./DraggableImage"
import "./ImageSelector.css"


export default function ImageSelector(props) {

    const willyWonka = require("../../Assets/Memes/MemeTemplates/wiity-willy-wonka.jpg")
    const distractedBoyfriend = require("../../Assets/Memes/MemeTemplates/distracted-boyfriend.jpg")
    const useYourHead = require("../../Assets/Memes/MemeTemplates/use-your-head.jpg")
    
    const imageArray = [
        willyWonka,
        distractedBoyfriend,
        useYourHead
    ]

    return (
        <>
            <div className="selector-root">
                {imageArray.map((item) => {
                    return <DraggableImage imgSrc={item} />
                    // return <img ref={props.drag} src={item} />
                })}
                {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone> */}
            </div>
        </>
    )
}