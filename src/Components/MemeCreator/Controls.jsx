import React from "react"


export default React.forwardRef((props, ref) => {

    const DEFAULT_TEXT_CONTENT = "texto"

    return (
        <div className="controls-root">
            <button onClick={() => ref.current.addText(DEFAULT_TEXT_CONTENT)}>Adicionar texto</button>
            <button onClick={() => ref.current.changeColor("black")}>Preto</button>
            <button onClick={() => ref.current.changeColor("red")}>Vermelho</button>
            <button onClick={() => ref.current.changeColor("white")}>Branco</button>
            <button onClick={() => ref.current.deleteText()}>Deletar</button>
        </div>
    )
})