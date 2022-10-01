import React from "react"
import { useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./Technology.css"
import TechnologyNav from "./TechnologyNav"

function TechDetails(props) {
    return (
        <>
        <TransitionGroup
            className="technology image"
            childFactory={child => 
                React.cloneElement(child, { 
                    classNames: "slide-right",
                    timeout: 1000
                })
            }
        >
            <CSSTransition 
                key={props.index}
                timeout={1000}
            >
                <div className="technology image">
                    <picture>
                        <source media='(min-width: 960px)' srcSet={process.env.PUBLIC_URL + props.data.images.portrait} />
                        <img src={process.env.PUBLIC_URL + props.data.images.landscape} alt={props.data.name} />
                    </picture>
                </div>
            </CSSTransition>
        </TransitionGroup>
        <div className="technology-title title">
            <h2>THE TERMINOLOGY...</h2>
            <h3>{props.data.name.toUpperCase()}</h3>
        </div>
        <div className="technology-detail detail">
            <p>{props.data.description}</p>
        </div>
        </>
    )
}

export default function Technology(props) {
    const [index, setIndex] = useState(0)

    function handleIndex(e) {
        setIndex(e.target.value)
    };
    return (
        <div id="technology" className="pages">
            <div className='heading'>
                <p>03</p>
                <h1>SPACE LAUNCH 101</h1>
            </div>


            <TechDetails data={props.data[index]} index={index} />
            <TechnologyNav handleIndex={handleIndex} index={index} />
        </div>
    )
}