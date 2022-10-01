import React from 'react';
import './Header.css';
import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

// props require toggleSidebar(func)
export default function Header(props) {

    // sidebar toggle
    const [sidebar, setSidebar] = useState(false)
    
    function toggleSidebar() {
        setSidebar(prev => !prev)
    }

    return (
        <header>
            <Link to="/"><img src={process.env.PUBLIC_URL + '/assets/shared/logo.svg'} alt='Logo' /></Link>
            <div className='nav-list'>
                <ul className='navbar'>
                    <li className='nav-item' ><NavLink end to="/">
                        <span className='short'>HOME</span><span className='long'>00 HOME</span>
                    </NavLink></li>
                    <li className='nav-item' ><NavLink to="/destination">
                    <span className='short'>DESTINATION</span><span className='long'>01 DESTINATION</span>
                    </NavLink></li>
                    <li className='nav-item' ><NavLink to="/crew">
                    <span className='short'>CREW</span><span className='long'>02 CREW</span>
                    </NavLink></li>
                    <li className='nav-item' ><NavLink to="/technology">
                    <span className='short'>TECHNOLOGY</span><span className='long'>03 TECHNOLOGY</span>
                    </NavLink></li>
                </ul>
                <button id='side-toggler' onClick={toggleSidebar}><img src={process.env.PUBLIC_URL + '/assets/shared/icon-hamburger.svg'} alt='menu icon' /></button>
            </div>
            { sidebar && (
            <div className='sidebar-box'>
                <button onClick={toggleSidebar}><img src={process.env.PUBLIC_URL + '/assets/shared/icon-close.svg'}  alt='menu icon' /></button>
                <nav className='sidebar'>
                    <ul className='side-menu'>
                        <li className='side-item' onClick={toggleSidebar}><NavLink end to="/">00 HOME</NavLink></li>
                        <li className='side-item' onClick={toggleSidebar}><NavLink to="/destination">01 DESTINATION</NavLink></li>
                        <li className='side-item' onClick={toggleSidebar}><NavLink to="/crew">02 CREW</NavLink></li>
                        <li className='side-item' onClick={toggleSidebar}><NavLink to="/technology">03 TECHNOLOGY</NavLink></li>
                    </ul>   
                </nav>
            </div>
            )}
        </header>
    )
}