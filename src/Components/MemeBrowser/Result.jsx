import React, { useRef } from "react"
import { Carousel } from "antd"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import Loading from "../Loading/Loading"
import "./Result.css"


export default React.forwardRef((props, ref) => {
    console.log(props.memeArray)
    return (
        <div ref={ref} className={"results " + props.resultModifier}>
            <div className="results-container">
                {props.fetchingData ?
                    <Loading className="loading" />
                    :
                    <>
                        {props.memeArray.map((item) => {
                            return <img key={item.key} src={item.url} alt="meme-imagem" />
                        })}
                        {/* <div className="arrow-button-group">
                            <LeftOutlined className="left arrow-button"></LeftOutlined>
                            <RightOutlined className="right arrow-button"></RightOutlined>
                        </div> */}
                        {/* <Carousel
                            dots={true}
                            autoplay
                        >
                            {props.memeArray.map((item) => {
                                return <img key={item.key} src={item.url} alt="meme-imagem" />
                            })}
                        </Carousel> */}
                    </>
                }
            </div>
        </div>
    )
})