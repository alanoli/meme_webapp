import React from "react"
// import { DndProvider } from "react-dnd"
// import { HTML5Backend } from "react-dnd-html5-backend"
import CreatorRoot from "./CreatorRoot"

import "./MemeCreator.css"

export default function MemeCreator() {

	return (
		// TODO: remove refactor component
		// <DndProvider backend={HTML5Backend}>
			<div className="creator-root">
				<CreatorRoot />
			</div>
		// </DndProvider>
	)
}