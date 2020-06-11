import React from "react"
import { Button } from "antd"
import "./FrontPage.css"

import ImageInfiniteSlider from "../ImageInfiniteSlider/ImageInfiniteSlider"
import lapis from "../../Assets/Images/lapis.png"
import lupa from "../../Assets/Images/lupa.png"

export default React.forwardRef((props, catalogRef) => {

    function navToRef() {
        catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="front-page front-page-background">
            <ImageInfiniteSlider />
            <div className="front-middle">
                <div className="title-container">
                    <h1 className="title">Seu Meme</h1>
                </div>
                <div className="site-options-root">
                    <div className="option create">
                        <p className="text">Crie</p>
                        <img src={lapis} alt=""/>
                    </div>
                    <div className="option">
                        <p className="text">Encontre</p>
                        <img src={lupa} alt=""/>
                    </div>
                </div>
                <div className="nav-button-root">
                    <Button className="btn-go">Explorar</Button>
                </div>
            </div>
            <ImageInfiniteSlider orientation={"reverse"}/>
        </div>
    )
})