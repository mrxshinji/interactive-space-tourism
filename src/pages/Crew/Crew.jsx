import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Crew.css"
import CrewNav from "./CrewNav";

function CrewMember(props) {
    return (
        <>
        <TransitionGroup
            className="crew"
        >
        <CSSTransition 
            key={props.index}
            timeout={1000}
            classNames="appear"
            exit={false}
        >
            <div>
                <img src={process.env.PUBLIC_URL + props.data.images.webp} alt={props.data.name} />
            </div>
        </CSSTransition>
        </TransitionGroup>
        <div className="person title">
            <h2>{props.data.role.toUpperCase()}</h2>
            <h3>{props.data.name.toUpperCase()}</h3>
        </div>
        <div className="crew-detail detail">
            <p>{props.data.bio}</p>
        </div>
        <button id="crew-next" className="next-btn" onClick={props.handleNext}>NEXT</button>
        </>
    )
}

export default function Crew(props) {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    function handleIndex(e) {
        setIndex(e.target.value)
    };

    function handleNext() {
        if (index < 3) {setIndex(prev => prev + 1)}
        else { navigate("/technology") }
        }
    
    return (
        <div id="crew" className="pages">
            <div className='heading'>
                <p>02</p>
                <h1>MEET YOUR CREW</h1>
            </div>
            <CrewMember data={props.data[index]} handleNext={handleNext} index={index} />
            <CrewNav handleIndex={handleIndex} index={index} />
        </div>
    )
}