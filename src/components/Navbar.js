import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className = "container">
                <a className = "brand-logo">Project03</a>
                <ul className= "right">
                    <li><a href="/">About</a></li>
                    <li><a href="/todo">Todo</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar