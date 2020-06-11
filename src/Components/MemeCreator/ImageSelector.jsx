import React, { useState } from "react"
import Dropzone from "react-dropzone"
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
                    <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                        {({ getRootProps, getInputProps }) => (
                            <section>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    <p>Carrege uma imagem</p>
                                </div>
                            </section>
                        )}
                    </Dropzone>
                </div>
                <div onClick={() => setImageGaleryModalVisible(true)} className="image-selection-box main-button-style">
                    {/* <img src={galeryImage} /> */}
                    <p>Selecione</p>
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
            </div>
        </>
    )
})