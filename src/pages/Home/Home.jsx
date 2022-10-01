import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <div id='home' className="pages">
            <div id='text'>
                <h1>SO, YOU WANT TO TRAVEL TO</h1>
                <h2>SPACE</h2>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <Link to="/destination">
                <div id='explore'>
                    <h3>EXPLORE</h3>
                </div>
            </Link>
        </div>
    )
}


