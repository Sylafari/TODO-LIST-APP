import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className = "container">
                <a className = "brand-logo">Project03</a>
                <ul className= "right">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar