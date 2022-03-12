import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

const Intro = () => {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 65,
            typeSpeed: 100,
            strings: [ "fullstack","developer"] 
        })
    }, [])

    return (
        <div className="intro" id="intro">
            
            <div className="left">
                <div className="wrapper">
                    <h2>Hello there, I'm</h2>
                    <h1>Ronice Yemeli</h1>
                    <h3>junior<span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="/assets/down.png" alt="down_arrow" />
                </a>
            </div>
            <div className="right"></div>
        </div>
    )
}

export default Intro
