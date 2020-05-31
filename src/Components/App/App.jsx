import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"

import MainHeader from "../MainHeader/Header"
import Header from "../Header/Header"
import FrontPage from "../FrontPage/FrontPage"
import MemeBrowser from "../MemeBrowser/MemeBrowser"
import Catalog from "../Catalog/Catalog"
import BeingBuilt from "../App/BeingBuilt"
import Footer from "../Footer/Footer"
import MemeCreator from "../MemeCreator/MemeCreator"

import "./App.css"

export default function App() {

    const catalogRef = React.createRef()
    const browseMemeRef = React.createRef()

    return (
        <BrowserRouter forceRefresh={true}>
            <Switch>
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
                    <MemeCreator />
                </Route>
                <Route exact path="/conversas-fake">
                    <Header />
                    <BeingBuilt />
                </Route>
                <Route exact path="/contact">
                    <Header />
                    <BeingBuilt />
                </Route>
                <Route exact path="/about">
                    <Header />
                    <BeingBuilt />
                </Route>
                <Route path='/api' component={() => {
                    window.location.href = 'http://localhost:3333/api-docs/'
                    return null
                }} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </BrowserRouter >
    )
}