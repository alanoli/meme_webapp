import React, { useRef } from "react"
import { Carousel } from "antd"
import Loading from "../Loading/Loading"
import "./Result.css"


export default React.forwardRef((props, ref) => {
    
    return (
        <div ref={ref} className="results">
            <div className="results-container">
                {props.fetchingData ?
                    <Loading className="loading" />
                    :
                    <Carousel
                        dots={false}
                    >
                        {props.memeArray.map((item) => {
                            return <img key={item.key} src={item.url} alt="meme-imagem" />
                        })}
                    </Carousel>
                }
            </div>
        </div>
    )
})