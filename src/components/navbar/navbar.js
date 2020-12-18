import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
export default function Navigation() {
    return(
        <nav>
            <ul>
                <li className="navbar__item"><Link className="navbar__link" to="/"> AMA. <span className="navbar__subtitle"> another movie api </span> </Link></li>
            </ul>
        </nav>
    )
}