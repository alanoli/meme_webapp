import React from "react"
import { useHistory } from "react-router-dom"
import "./FrontPage.css"

import ImageInfiniteSlider from "../ImageInfiniteSlider/ImageInfiniteSlider"
import lapis from "../../Assets/Images/lapis.png"
import lupa from "../../Assets/Images/lupa.png"
import menuImg from "../../Assets/Images/menu-aberto.png"

export default React.forwardRef((props, catalogRef) => {

    const history = useHistory()

    return (
        <div className="front-page front-page-background">
            <ImageInfiniteSlider />
            <div className="front-middle">
                <div className="title-bar">
                    <img src={menuImg} alt=""/>
                </div>
                <div className="title-container">
                    <h1 className="title">SeU MeMe</h1>
                </div>
                <div className="site-options-root">
                    <div onClick={() => history.push("/gerador")} className="option main-button-style">
                        <p className="text">Crie</p>
                        <img src={lapis} alt=""/>
                    </div>
                    <div onClick={() => history.push("/buscador")} className="option main-button-style">
                        <p className="text">Encontre</p>
                        <img src={lupa} alt=""/>
                    </div>
                </div>
            </div>
            <ImageInfiniteSlider orientation={"reverse"}/>
        </div>
    )
})