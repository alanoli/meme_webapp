import React, { useState, useRef, useEffect } from "react"
import { Button, Input } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import debounce from "lodash.debounce"

import api from "../../Connection/api"
import "./MemeBrowser.css"

import TagSelector from "./TagSelector"
import Result from "./Result"
import searchIcon from "../../Assets/Images/search_icon.png"


export default React.forwardRef((props, ref) => {

	const [memeArray, setMemeArray] = useState({ arraySize: 1, completeArray: [], displayArray: [] })

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
		async function getInitialData() {
			setFetchingData(true)
			await getData()
			setFetchingData(false)
		}

		getInitialData()
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
			const apiResp = await api.post("/memes", {
				category: categRef.current[0] === undefined ? "" : categRef.current[0].value,
				style: stylesRef.current[0] === undefined ? "" : stylesRef.current[0].value
			})

			// await sleep()

			if (apiResp.status === 200) {
				let completeArray = apiResp.data.map((item) => {
					return { url: item.url, key: item.id }
				})
				let memeArr = {
					"arraySize": 3,
					"completeArray": completeArray,
					"displayArray": completeArray.slice(0, 3)
				}
				setMemeArray(memeArray => memeArr)
			}
		} catch (err) {
			console.log(err)
			// NO MEME FOUND
		}
	}

	window.onscroll = debounce(() => {
		if (document.body.scrollHeight - window.scrollY <= window.innerHeight + 420) {
			setMemeArray((memeArray) => {
				return ({
					"arraySize": memeArray.arraySize + 1,
					"completeArray": memeArray.completeArray,
					"displayArray": memeArray.completeArray.slice(0, memeArray.arraySize + 1)
				})
			})
		}
	}, 100);

	// TODO: get styles and tags when componen is mounted only
	// console.log(fetchingData)

	return (
		<>
			<div ref={ref} className={"meme-browser-root " + resultsActive}>
				<div className="search-bar">
					<img src={searchIcon} alt=""/>
					<Input placeholder="Pesquise por memes" />
				</div>
				{/* <div className="input-header">
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
				</div> */}
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