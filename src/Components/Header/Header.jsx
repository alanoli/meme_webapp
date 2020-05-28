import React from "react"
import { useHistory } from "react-router-dom"
import { PageHeader } from "antd"

import "./Header.css"


export default function Header() {
    const history = useHistory()
    return (
        <div className="custom-page-header">
            <PageHeader
                title="seumeme.com"
                onBack={() => history.push("/")}
            />
        </div>
    )
}