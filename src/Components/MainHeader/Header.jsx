import React from "react"
import { PageHeader } from "antd"
import "./Header.css"

const avatarImg = require("../../Assets/Images/avatarIcon2.png")

export default function Header() {
    return (
        <PageHeader
            className="page-header front-page-background"
            title="seumeme.com"
            avatar={{ src: avatarImg }}
        />
    )
}