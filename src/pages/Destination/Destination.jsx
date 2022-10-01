import React, { useState } from "react"
import "./Destination.css"
import DestinationNav from "./DestinationNav"
import { useNavigate } from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"

function DestinationPlanet(props) {
    return (
        <>
        <TransitionGroup
            className="planet"
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
        <div className="planet-text title">
            <h2>{props.data.name.toUpperCase()}</h2>
            <p>{props.data.description}</p>
            <hr />
        </div>
        <div className='details'>
            <div className="distance">
                <h3>AVG. DISTANCE</h3>
                <p>{props.data.distance.toUpperCase()}</p>
            </div>
            <div className="time">
                <h3>EST. TRAVEL TIME</h3>
                <p>{props.data.travel.toUpperCase()}</p>
            </div>
        </div>
        <button id="destination-next" className="next-btn" onClick={props.handleNext}>NEXT</button>
        </>
    )
}


export default function Destination(props) {
    // to switch state and render planet
    const [planet, setPlanet] = useState(0);
    const navigate = useNavigate()

    function handlePlanet(e) {
            setPlanet(e.target.value)
        };

    function handleNext() {
        if (planet < 3) {setPlanet(prev => prev + 1)}
        else { navigate("/crew") }
        }

    return (
        <div id='destination' className='pages'>
            <div className='heading'>
                <p>01</p>
                <h1>PICK YOUR DESTINATION</h1>
            </div>
            <DestinationNav handlePlanet={handlePlanet} planet={planet} />
            <DestinationPlanet data={props.data[planet]} index={planet} handleNext={handleNext} />
        </div>
    )
}


