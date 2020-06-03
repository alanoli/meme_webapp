import React from "react"


export default React.forwardRef((props, ref) => {

    return (
        <div className="controls-root">
            <button onClick={() => ref.current.addText("blabla")}>Adicionar texto</button>
            <button>Cor</button>
        </div>
    )
})