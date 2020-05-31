import React from "react"
import { useHistory } from "react-router-dom"
import "./Footer.css"


export default function Footer() {
	const history = useHistory()

	return (
		<div className="footer-root">
			<div className="footer-links">
				<div className="links-site">
					<h2 className="link-word" onClick={() => history.push("/buscador")}>Buscador</h2>
					<h2 className="link-word" onClick={() => history.push("/gerador")}>Gerador</h2>
					<h2 className="link-word" onClick={() => history.push("/conversas-fake")}>Conversas fake</h2>
					<h2 className="link-word" onClick={() => history.push("/api")}>API</h2>
				</div>
				<div className="links-contact">
					<h2 className="link-word" onClick={() => history.push("/contact")}>Contato</h2>
					<h2 className="link-word" onClick={() => history.push("/about")}>Sobre</h2>
				</div>
			</div>
			<div className="bottom">
				<p>@ Copyright - Todos os diretos reservados</p>
				<p>seumeme.com - 2020</p>
			</div>
		</div>
	)
}