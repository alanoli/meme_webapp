import React from "react"
import { useState } from "react"
import { SliderPicker, ChromePicker } from "react-color"
import { Modal } from "antd"

import "./Controls.css"


export default React.forwardRef((props, ref) => {

    const DEFAULT_TEXT_CONTENT = "texto"
    const [selectedColor, setSelectedColor] = useState()
    const [modalVisible, setModalVisible] = useState()

    return (
        <div className="controls-root">
            <div className="color-root">
                <SliderPicker
                    color={selectedColor}
                    onChange={(color) => {
                        setSelectedColor(color)
                        ref.current.changeTextColor(color.hex)
                    }}
                />
            </div>
            <div className="control-buttons">
                <button onClick={() => ref.current.addText(DEFAULT_TEXT_CONTENT)}>Adicionar texto</button>
                <button onClick={() => ref.current.deleteText()}>Deletar</button>
                <button onClick={() => ref.current.downloadImage()} >Exportar</button>
                <button onClick={() => setModalVisible(true)} >Limpar</button>
            </div>
            <Modal
                visible={modalVisible}
                onOk={() => {
                    ref.current.cleanUpScreen()
                    setModalVisible(false)
                }}
                onCancel={() => setModalVisible(false)}
            >
                <h3>Tem certeza que deseja limpar?</h3>
            </Modal>
        </div>
    )
})