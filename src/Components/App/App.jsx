import React, { useRef, forwardRef, createRef } from "react"
import { Route, BrowserRouter } from "react-router-dom"

import MainHeader from "../MainHeader/Header"
import Header from "../Header/Header"
import FrontPage from "../FrontPage/FrontPage"
import MemeBrowser from "../MemeBrowser/MemeBrowser"
import Catalog from "../Catalog/Catalog"
import BeingBuilt from "../App/BeingBuilt"

import "./App.css"

export default function App() {

    const catalogRef = React.createRef()
    const browseMemeRef = React.createRef()

    return (
        <BrowserRouter forceRefresh={true}>
            <Route exact path="/">
                <MainHeader />
                <FrontPage ref={catalogRef} />
                <Catalog ref={catalogRef} />
            </Route>
            <Route exact path="/buscador">
                <Header />
                <MemeBrowser ref={browseMemeRef} />
            </Route>
            <Route exact path="/gerador">
                <Header />
                <BeingBuilt />
            </Route>
            <Route exact path="/conversas-fake">
                <Header />
                <BeingBuilt />
            </Route>
        </BrowserRouter >
    )
}