import React, { useState, useImperativeHandle, useRef, useEffect } from "react"
import { Stage, Layer, Image } from "react-konva"

import "./ImageEditor.css"
import KonvaText from "./KonvaText"


export default React.forwardRef((props, ref) => {

	const [textArray, setTextArray] = useState([])
	const [selectedTextId, setSelectedTextId] = useState(null)
	const [imageArray, setImageArray] = useState([])

	const stageRefs = useRef()

	useImperativeHandle(ref, () => ({
		addText(textContent) {
			setTextArray(array => [...array, { text: textContent }])
		},

		downloadImage(name = "seumeme.png") {
			const uri = stageRefs.current.toDataURL()
			let link = document.createElement('a');
			link.download = name;
			link.href = uri;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
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
		console.log(e.target)
		console.log(e.target.tagName)
		// console.log(e.target.getStage())
		// console.log(e.target.getLayer())
		// const otherObject = e.target.getStage().children
		// if(e.target.class === "editor-root") {
		// 	setSelectedTextId(null)
		if (e.target.tagName !== "CANVAS") {
			setSelectedTextId(null)
		}
		// if (e.target === e.target.getStage()) {
		// 	setSelectedTextId(null)
		// }
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
						{textArray.map((item, i) => {
							return (
								<KonvaText
									text={item.text}
									key={i}
									isSelected={i === selectedTextId}
									onSelect={() => { setSelectedTextId(i) }}
								/>
							)
						})}
					</Layer>
				</Stage>
			</div>
		</div>
	)
})