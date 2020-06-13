import React, { useState, useImperativeHandle, useRef, useEffect } from "react"
import { Stage, Layer, Image } from "react-konva"

import "./ImageEditor.css"
import KonvaText from "./KonvaText"


export default React.forwardRef((props, ref) => {
	const DEFAULT_TEXT_COLOR = "black"

	const [textArray, setTextArray] = useState([])
	const [selectedTextId, setSelectedTextId] = useState(null)
	const [imageArray, setImageArray] = useState([])

	const stageRefs = useRef()

	useImperativeHandle(ref, () => ({
		addText() {
			const textContent = prompt("Insira o texto:")
			setTextArray(textArray => [...textArray, { text: textContent, color: DEFAULT_TEXT_COLOR }].map((textItem, i) => {
				return ({
					text: textItem.text,
					color: textItem.color,
					textId: i
				})
			}))
		},

		changeTextColor(color) {
			setTextArray(textArray => textArray.map((textItem) => {
				if(textItem.textId === selectedTextId) { textItem.color = color }
				return textItem
			}))
		},

		downloadImage(name = "seumeme.png") {
			const uri = stageRefs.current.toDataURL()
			let link = document.createElement('a');
			link.download = name;
			link.href = uri;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		},

		deleteText() {
			setTextArray(textArray => textArray.filter((item) => item.textId !== selectedTextId))
			setSelectedTextId(null)
		},

		addImage(imageSrc) {
			const img = document.createElement("img")
			img.src = imageSrc
			img.onload = function () {
				setImageArray(array => [...array, img])
			}
		},

		addImageFromFile(binaryData) {
			const img = document.createElement("img")
			// let img_base64_val = btoa(unescape(encodeURIComponent(binaryData)));
			let base64 = base64
			img.src = `data:image/png;base64,${binaryData}`
			img.onload = function () {
				setImageArray(array => [...array, img])
			}
		},

		cleanUpScreen() {
			setTextArray([])
			setImageArray([])
		}

	}))

	function drop(event) {
		event.preventDefault()
		const img = document.createElement("img")
		img.src = event.dataTransfer.getData("src")
		img.onload = function () {
			setImageArray(array => [...array, img])
		}
	}

	function checkDeselect(e) {
		if (e.target.tagName !== "CANVAS") {
			setSelectedTextId(null)
		}
	}

	return (
		<div
			className="editor-root"
			onMouseDown={checkDeselect}
		>
			<div
				className="editor-section"
				onDragOver={(event) => event.preventDefault()}
				onDrop={(event) => drop(event)}
			>
				<Stage
					ref={stageRefs}
					width={350}
					height={350}
				>
					<Layer>
						{imageArray.map((item, i) => {
							return (
								<Image
									image={item}
									key={i}
									x={0}
									y={0}
									width={350}
									height={350}
								/>
							)
						})}
					</Layer>
					<Layer>
						{textArray.map((item) => {
							console.log(item.color)
							return (
								<KonvaText
									text={item.text}
									key={item.textId}
									fontStyle={"bold"}
									color={item.color}
									isSelected={item.textId === selectedTextId}
									onSelect={() => { setSelectedTextId(item.textId) }}
								/>
							)
						})}
					</Layer>
				</Stage>
			</div>
		</div>
	)
})