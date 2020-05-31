import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "antd"
import "./Catalog.css"


export default React.forwardRef((props, ref) => {
    const history = useHistory()
    return (
        <div ref={ref} className="catalog-root front-page-background">
            <div className="catalog-title">
                <h1>Catálogo</h1>
            </div>
            <div className="catalog-content">
                <Button onClick={() => history.push("/buscador")}>Buscador</Button>
                <Button onClick={() => history.push("/gerador")}>Gerador</Button>
                <Button onClick={() => history.push("/conversas-fake")}>Conversas fake</Button>
            </div>
        </div>
    )
})