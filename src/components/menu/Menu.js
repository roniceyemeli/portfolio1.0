import React from 'react';
import './menu.scss'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#intro">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        intro
                    </a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#portfolio">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        portfolio
                    </a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#works">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        works
                    </a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#testimonials">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        testimonials
                    </a>
                </li>
                <li onClick={()=>setMenuOpen(!menuOpen)}>
                    <a href="#contacts">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        contacts
                    </a>
                </li>

            </ul>
        </div>
    )
}

export default Menu
