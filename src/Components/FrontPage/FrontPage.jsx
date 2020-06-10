import React from "react"
import { Button } from "antd"
import "./FrontPage.css"

import imgCreate from "../../Assets/Images/avatarIcon.png"

export default React.forwardRef((props, catalogRef) => {

    function navToRef() {
        catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="front-page front-page-background">
            <div className="title-container">
                <h1 className="title">Seu Meme</h1>
            </div>
            <div className="site-options-root">
                <div className="option">
                    <p className="text">Crie</p>
                    <img src={imgCreate} alt=""/>
                </div>
                <div className="option">
                    <p className="text">Encontre</p>
                </div>
                <div className="option">
                    <p className="text">API</p>
                </div>
            </div>
            <div className="nav-button-root">
                <Button onClick={navToRef} className="btn-go">Explorar</Button>
            </div>
        </div>
    )
})