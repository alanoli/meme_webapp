import React, { useState, useRef, useEffect } from "react"
import { Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import api from "../../Connection/api"
import "./MemeBrowser.css"

import TagSelector from "./TagSelector"
import Result from "./Result"


export default React.forwardRef((props, ref) => {

    const [memeArray, setMemeArray] = useState([])
    const [fetchingData, setFetchingData] = useState(false)
    const [resultsActive, setResultsActive] = useState("")
    const [styleOptions, setStyleOptions] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([])

    const tagsRef = useRef({})
    const stylesRef = useRef({})

    useEffect(() => {
        // get data for filters
        async function getFilters() {
            try {
                const dbResponseStyles = await api.get("/memes/styles")
                const dbResponseCategories = await api.get("/memes/categories")
                if(dbResponseStyles.status === 200 && dbResponseCategories.status === 200) {
                    setStyleOptions(dbResponseStyles)
                    setCategoryOptions(dbResponseCategories)
                }
            } catch (err) {
                window.alert(err)
            }
        }
        getFilters()
    }, [])

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
        setResultsActive("results-active")
        try {
            const apiResp = await api.get("/memes", {
                tags: tagsRef.current,
                styles: stylesRef.current
            })

            await sleep()
            
            if (apiResp.status === 200) {
                setMemeArray(apiResp.data.map((item) => {
                    return { url: item.url, key: item.id }
                }))
            }
        } catch (err) {
            // NO MEME FOUND
        }
    }

    // TODO: get styles and tags when componen is mounted only

    console.log(fetchingData)

    return (
        <>
            <div ref={ref} className={"meme-browser-root " + resultsActive}>
                <div className="input-header">
                    <h1>Encontre ...</h1>
                    <TagSelector
                        placeHolder="Estilos"
                        tagColor="blue"
                        ref={tagsRef}
                        options={styleOptions}
                    />
                    <TagSelector
                        placeHolder="Categorias"
                        tagColor="red"
                        ref={stylesRef}
                        options={categoryOptions}
                        inputProps={{ readOnly: true }}
                    />
                    <Button
                        onClick={async () => { navToRef(); setFetchingData(true); await getData(); setFetchingData(false) }}
                        icon={<SearchOutlined />}
                    >
                        Pesquisar
                    </Button>
                </div>
            </div>
            <Result
                resultModifier={resultsActive}
                ref={resultRef}
                memeArray={memeArray}
                fetchingData={fetchingData}
            />
        </>
    )
})