import React, { useState, useImperativeHandle, useRef } from "react"
import { Stage, Layer, Image } from "react-konva"

import "./ImageEditor.css"
import KonvaText from "./KonvaText"


export default React.forwardRef((props, ref) => {

	// const [currentImage, setCurrentImage] = useState()
	// const [textItems, setTextItems] = useState([])
	const [elementArray, setElementArray] = useState([])
	const [selectedTextId, setSelectedTextId] = useState(null)

	const stageRefs = useRef()

	useImperativeHandle(ref, () => ({
		addText(textContent) {
			const id = "1" // TODO: randomize
			setElementArray(array => [...array,
			<KonvaText
				text={textContent}
				key={id}
				stageRef={stageRefs}
				// currentSelected={stageRefs.current.selectedTextId}
				isSelected={id === selectedTextId}
				onSelect={() => { setSelectedTextId(id) }}
			/>
			])
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

	// function draw(imgSrc) {
	// 	const img = document.createElement("img");
	// 	img.src = imgSrc
	// 	img.onload = function () {
	// 		setCurrentImage(img)
	// 	}
	// }

	function drop(event) {
		event.preventDefault()
		const img = document.createElement("img")
		img.src = event.dataTransfer.getData("src")
		// img.crossOrigin = "Anonymous"
		img.onload = function () {
			setElementArray(array => [...array, <Image image={img} key={0} x={0} y={0} width={350} height={350} />])
		}
	}

	function checkDeselect(e) {
		const clickedOnEmpty = e.target === e.target.getStage()
		if (clickedOnEmpty) {
			setSelectedTextId(null)
		}
	}

	console.log(selectedTextId)

	return (
		<div className="editor-root">
			{/* <button onClick={() => { downloadURI(stageRefs.current.toDataURL(), "image.png") }} >RemoveImage</button> */}
			<div
				className="editor-section"
				onDragOver={(event) => event.preventDefault()}
				onDrop={(event) => drop(event)}
			>
				<Stage
					ref={stageRefs}
					width={350}
					height={350}
					onMouseDown={checkDeselect}
				>
					<Layer>
						{elementArray.map((item) => {
							return item
						})}
						{/* <KonvaText
							text={"textContent"}
							key={1}
							currentSelected={selectedTextId}
							isSelected={1 === selectedTextId}
							onSelect={() => { setSelectedTextId(1) }}
						/> */}
					</Layer>
				</Stage>
			</div>
		</div >
	)
})