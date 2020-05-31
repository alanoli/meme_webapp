import React from "react"
import { useDrag } from "react-dnd"
// import Dropzone from "react-dropzone"

const imageSelectorTest = require("../../Assets/Images/meme_selector.png")

export default function ImageSelector() {
    
    const [{ isDragging }, drag] = useDrag({
        item: { type: "memeimage" },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div ref={drag} className="selector-root">
            <img src={imageSelectorTest} alt="" />
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
    )
}