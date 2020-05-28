import React, { useRef, forwardRef, createRef } from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header/Header"
import FrontPage from "../FrontPage/FrontPage"
import MemeBrowser from "../MemeBrowser/MemeBrowser"

import "./App.css"

export default function App() {

    const browseMemeRef = React.createRef()

    return (
        <BrowserRouter>
            <Header />
            <FrontPage ref={browseMemeRef}/>
            <MemeBrowser ref={browseMemeRef}/>
        </BrowserRouter>
    )
}