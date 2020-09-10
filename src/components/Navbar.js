import React from 'react'

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className= "container">
                <ul className="left">
                    <li><a href="/">About</a></li>
                    <li><a href="/Todo">Todo</a></li>
                    <li><a href="/Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar