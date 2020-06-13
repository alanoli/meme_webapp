import React, { useState, useRef, useEffect } from "react"
import { Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"

import api from "../../Connection/api"
import "./MemeBrowser.css"

import TagSelector from "./TagSelector"
import Result from "./Result"


export default React.forwardRef((props, ref) => {

	const [memeArray, setMemeArray] = useState([])
	const [arraySize, setArraySize] = useState(1)
	const [resultArray, setResultArray] = useState([])

	const [fetchingData, setFetchingData] = useState(false)
	const [resultsActive, setResultsActive] = useState("")
	const [styleOptions, setStyleOptions] = useState([])
	const [categoryOptions, setCategoryOptions] = useState([])

	const categRef = useRef({})
	const stylesRef = useRef({})

	useEffect(() => {
		// get data for filters
		async function getFilters() {
			try {
				const dbResponseStyles = await api.get("/memes/styles")
				const dbResponseCategories = await api.get("/memes/categories")
				// console.log(dbResponseCategories, dbResponseStyles)
				if (dbResponseStyles.status === 200 && dbResponseCategories.status === 200) {
					setStyleOptions(dbResponseStyles.data.map((item) => {
						return { label: item.name, value: item.id }
					}))
					setCategoryOptions(dbResponseCategories.data.map((item) => {
						return { label: item.name, value: item.id }
					}))
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
		// console.log("getting data")
		setResultsActive("results-active")
		try {
			// console.log("cat: ", categRef, "styl: ", stylesRef)
			const apiResp = await api.post("/memes", {
				category: categRef.current[0] === undefined ? "" : categRef.current[0].value,
				style: stylesRef.current[0] === undefined ? "" : stylesRef.current[0].value
			})

			await sleep()

			if (apiResp.status === 200) {
				setMemeArray(apiResp.data.map((item) => {
					return { url: item.url, key: item.id }
				}))
				setArraySize(3)
				setResultArray(resultArray => memeArray.slice(0, arraySize))
			}
		} catch (err) {
			console.log(err)
			// NO MEME FOUND
		}
	}

	window.onscroll = () => {
		if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			console.log(memeArray.slice(0, arraySize))
			setArraySize(size => size + 1)
			setResultArray(resultArray => memeArray.slice(0, arraySize))
		}
	}

	// TODO: get styles and tags when componen is mounted only
	// console.log(fetchingData)

	return (
		<>
			<div ref={ref} className={"meme-browser-root " + resultsActive}>
				<div className="input-header">
					<h1>Encontre ...</h1>
					<TagSelector
						placeHolder="Estilos"
						tagColor="blue"
						ref={stylesRef}
						options={styleOptions}
					/>
					<TagSelector
						placeHolder="Categorias"
						tagColor="red"
						ref={categRef}
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
				memeArray={resultArray}
				fetchingData={fetchingData}
			/>
		</>
	)
})