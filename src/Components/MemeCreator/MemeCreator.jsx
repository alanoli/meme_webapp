import React, { useRef } from "react"

import ImageSelector from "./ImageSelector"
import ImageEditor from "./ImageEditor"
import Controls from "./Controls"

import "./MemeCreator.css"


export default function MemeCreator() {

	const controlRef = useRef()

	return (
		<div className="creator-root">
			<ImageSelector ref={controlRef} />
			<ImageEditor ref={controlRef} />
			<Controls ref={controlRef} />
		</div>
	)
}