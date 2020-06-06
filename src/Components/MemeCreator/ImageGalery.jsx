import React, { useEffect, useState } from "react"
import "./ImageGalery.css"


export default function ImageGalery({ imageSelection }) {

	const [imageArray, setImageArray] = useState([])

	const willyWonka = require("../../Assets/Memes/MemeTemplates/wiity-willy-wonka.jpg")
	const distractedBoyfriend = require("../../Assets/Memes/MemeTemplates/distracted-boyfriend.jpg")
	const useYourHead = require("../../Assets/Memes/MemeTemplates/use-your-head.jpg")
	const i1 = require("../../Assets/Memes/MemeTemplates/001.jpg")
	const i2 = require("../../Assets/Memes/MemeTemplates/002.jpg")
	const i3 = require("../../Assets/Memes/MemeTemplates/003.jpg")
	const i4 = require("../../Assets/Memes/MemeTemplates/004.jpg")
	const i5 = require("../../Assets/Memes/MemeTemplates/005.jpg")
	const i6 = require("../../Assets/Memes/MemeTemplates/006.jpg")
	const i7 = require("../../Assets/Memes/MemeTemplates/007.jpg")
	const i8 = require("../../Assets/Memes/MemeTemplates/008.jpg")
	const i9 = require("../../Assets/Memes/MemeTemplates/009.jpg")
	const i10 = require("../../Assets/Memes/MemeTemplates/010.jpg")
	const i11 = require("../../Assets/Memes/MemeTemplates/011.jpg")
	const i12 = require("../../Assets/Memes/MemeTemplates/012.jpg")


	const imageArrayDefault = [
		willyWonka,
		distractedBoyfriend,
		useYourHead,
		i1,
		i2,
		i3,
		i4,
		i5,
		i6,
		i7,
		i8,
		i9,
		i10,
		i11,
		i12,
	]

	useEffect(() => {
		setImageArray(imageArray => [...imageArrayDefault])
	}, [])

	return (
		<div className="galery-root">
			{imageArray.map((image, i) => {
				return (
					<div className="galery-slot">
						<img
							onClick={() => imageSelection(image)}
							key={i}
							src={image} />
					</div>
				)
			})}
		</div>
	)
}