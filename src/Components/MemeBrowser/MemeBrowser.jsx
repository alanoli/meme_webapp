import React, { useState, useRef } from "react"
import { Input, Button, Carousel, Tag, Select } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import api from "../../Connection/api"
import "./MemeBrowser.css"

import TagSelector from "./TagSelector"
import Result from "./Result"


export default React.forwardRef((props, ref) => {

    const [memeArray, setMemeArray] = useState([])
    const [fetchingData, setFetchingData] = useState(false)

    const tagsRef = useRef({})
    const stylesRef = useRef({})

    const resultRef = React.createRef()
    function navToRef() {
        resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // TODO: temp
    async function sleep() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000);
        })
    }

    async function getData() {
        const apiResp = await api.post("/memes", {
            tags: tagsRef.current,
            styles: stylesRef.current
        })

        await sleep()

        if (apiResp.status === 200) {
            setMemeArray(apiResp.data.map((item) => {
                return { url: item.url, key: item.id }
            }))
        }
    }

    // TODO: get styles and tags when componen is mounted only

    console.log(fetchingData)

    return (
        <div ref={ref} className="meme-browser-root">
            <div className="input-header">
                <h1>Encontre ...</h1>
                <TagSelector
                    placeHolder="Tags"
                    tagColor="blue"
                    ref={tagsRef}
                    options={[{ value: "faustao" }, { value: "escola" }, { value: "sufoco" }]}
                />
                <TagSelector
                    placeHolder="Estilo"
                    tagColor="red"
                    ref={stylesRef}
                    options={[{ value: "feliz-triste" }, { value: "conversa-wpp" }]}
                    inputProps={{readOnly:true}}
                />
                <Button
                    onClick={async () => { navToRef(); setFetchingData(true); await getData(); setFetchingData(false) }}
                    icon={<SearchOutlined />}
                >
                    Pesquisar
                </Button>
            </div>
            <Result
                ref={resultRef}
                memeArray={memeArray}
                fetchingData={fetchingData}
            />
        </div>
    )
})