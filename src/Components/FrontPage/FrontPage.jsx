import React from "react"
import { useHistory } from "react-router-dom"
import "./FrontPage.css"

import ImageInfiniteSlider from "../ImageInfiniteSlider/ImageInfiniteSlider"
import lapis from "../../Assets/Images/lapis.png"
import lupa from "../../Assets/Images/lupa.png"
import menuImg from "../../Assets/Images/menu-aberto.png"

export default React.forwardRef((props, catalogRef) => {

    // function navToRef() {
    //     catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    // }
    const history = useHistory()

    return (
        <div className="front-page front-page-background">
            <ImageInfiniteSlider />
            <div className="front-middle">
                <div className="title-bar">
                    <img src={menuImg} alt=""/>
                </div>
                <div className="title-container">
                    <h1 className="title">Seu Meme</h1>
                </div>
                <div className="site-options-root">
                    <div onClick={() => history.push("/gerador")} className="option">
                        <p className="text">Crie</p>
                        <img src={lapis} alt=""/>
                    </div>
                    <div onClick={() => history.push("/buscador")} className="option">
                        <p className="text">Encontre</p>
                        <img src={lupa} alt=""/>
                    </div>
                </div>
                {/* <div className="nav-button-root">
                    <Button className="btn-go">Explorar</Button>
                </div> */}
            </div>
            <ImageInfiniteSlider orientation={"reverse"}/>
        </div>
    )
})