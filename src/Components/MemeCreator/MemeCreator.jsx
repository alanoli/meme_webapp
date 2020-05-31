import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import ImageSelector from "./ImageSelector"
import Controls from "./Controls"

const { Button } = require("antd")
const imgTest = require("../../Assets/Images/beingBuiltImage.jpg")

export const ItemTypes = {
	MEMEIMAGE: 'memeimage'
  }

export default function MemeCreator() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className="creator-root">
				<ImageSelector />
				<div className="image-editor">
					<img src={imgTest} alt="" />
				</div>
				<Controls />
				<div className="image-save-panel">
					<Button>Exportar</Button>
					<Button>Cancelar</Button>
				</div>
			</div>
		</DndProvider>
	)
}