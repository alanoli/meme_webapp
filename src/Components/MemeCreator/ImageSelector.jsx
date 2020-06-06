import React, { useState } from "react"
import DraggableImage from "./DraggableImage"
import { Modal, Form } from "antd"
import "./ImageSelector.css"

import ImageGalery from "./ImageGalery"


export default React.forwardRef((props, ref) => {

    const galeryImage = require("../../Assets/Images/meme_galery_pre.png")
    const [imageGaleryModalVisible, setImageGaleryModalVisible] = useState(false)

    function handleOk() {
        setImageGaleryModalVisible(false)
    }

    function handleCancel() {
        setImageGaleryModalVisible(false)
    }

    return (
        <>
            <div className="selector-root">
                <div className="drop-zone">
                    Clique aqui para selecionar do arquivo
                </div>
                <div onClick={() => setImageGaleryModalVisible(true)} className="image-selection-box">
                    <img src={galeryImage} />
                </div>
                <Modal
                    title="Selecione a imagem base"
                    visible={imageGaleryModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <ImageGalery
                        imageSelection={
                            ref.current === undefined ?
                                null
                                :
                                (image) => { setImageGaleryModalVisible(false); ref.current.addImage(image) }
                        }
                    />
                </Modal>
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
})