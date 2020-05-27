import React, { useState } from "react"
import { Input, Button, Carousel } from "antd"
import api from "../../Connection/api"
import "./MemeBrowser.css"

export default function MemeBrowser() {

    const [memeArray, setMemeArray] = useState([])

    async function getData() {
        const apiResp = await api.get("/meme")
        if(apiResp.status === 200) {
            setMemeArray(apiResp.data.map((item) => {
                return {url: item.url, key: item.id}
            }))
        }
        console.log(memeArray)
    }

    return (
        <div className="meme-browser-root">
            <Input
                type="Text"
                placeholder="Pesquise por um meme (utilize palavras-chave)"
            />
            <Button onClick={getData}>Pesquisar</Button>
            <div className="results">
                <Carousel
                    autoplay
                >
                    {memeArray.map((item) => {
                        return <img key={item.key} src={item.url} alt="meme-imagem" />
                    })}
                </Carousel>
            </div>
        </div>
    )
}