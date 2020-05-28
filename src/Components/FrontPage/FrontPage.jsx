import React, { useRef, createRef } from "react"
import { Button } from "antd"
import "./FrontPage.css"


export default React.forwardRef((props, catalogRef) => {

    function navToRef() {
        catalogRef.current.scrollIntoView({behavior: "smooth", block: "start"})
    }

    return (
        <>
            <div className="front-page front-page-background">
                <h1 className="title">Seu repositório de memes favorito</h1>
                <Button onClick={navToRef} className="btn-go">Explorar</Button>
            </div>
        </>
    )
})