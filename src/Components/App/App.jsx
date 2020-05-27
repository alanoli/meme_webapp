import React from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header/Header"
import FrontPage from "../FrontPage/FrontPage"
import MemeBrowser from "../MemeBrowser/MemeBrowser"


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <FrontPage />
            <MemeBrowser />
        </BrowserRouter>
    )
}