import React, { useRef } from "react"
import { Button } from "antd"
import MemeBrowser from "../MemeBrowser/MemeBrowser"

import "./FrontPage.css"


export default function FrontPage() {

    const browseMemeRef = useRef(null)

    return (
        <div className="front-page">
            <h1 className="title">Seu repositório de memes favorito</h1>
            {/* <Button onClick={() => window.scrollTo(0, browseMemeRef.current.offsetTop)} className="btn-go">Explorar</Button> */}
            <Button className="btn-go">Explorar</Button>
        </div>
    )
}