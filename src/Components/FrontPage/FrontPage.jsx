import React from "react"
import { Button } from "antd"
import "./FrontPage.css"


export default React.forwardRef((props, catalogRef) => {

    function navToRef() {
        catalogRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="front-page front-page-background">
            <div className="title-container">
                <h1 className="title">Veja memes.</h1>
                <h1 className="title">Crie memes.</h1>
            </div>
            <Button onClick={navToRef} className="btn-go">Explorar</Button>
        </div>
    )
})