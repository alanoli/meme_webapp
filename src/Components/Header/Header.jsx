import React from "react"
import { PageHeader } from "antd"
import "./Header.css"

const avatarImg = require("../../Assets/Images/galoCego.jpg")

export default function Header() {
    return (
        <PageHeader
            className="page-header"
            title="seumeme.com"
            avatar={{ src: avatarImg }}
        />
    )
}