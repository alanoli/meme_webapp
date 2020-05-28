import React, { useState, useImperativeHandle } from "react"
import { Select, Tag } from "antd"


export default React.forwardRef((props, ref) => {

    const [tags, setTags] = useState([])

    useImperativeHandle(ref, () => {
        return tags
    }, [tags])

    // TODO: get from API
    // const options = [{ value: "gold" }, { value: "faustao" }, { value: "escola" }, { value: "whatsapp" }]

    function tagRender(params) {
        const { label, value, closable, onClose } = params
        return (
            <Tag color={props.tagColor} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
                {label}
            </Tag>
        )
    }

    return (
        <Select
            className="form-field"
            placeholder={props.placeHolder}
            mode="multiple"
            tagRender={tagRender}
            options={props.options}
            onChange={(value) => setTags(value)}
        />
    )
})