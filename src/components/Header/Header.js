import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
    return (
        <header className='header'>
            <div className="container row">
                <h1>Orion</h1>
                <nav>
                    <ul className='header__menu'>
                        <li>
                        <NavLink to="/about" className="header__menu-links">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="/price-list" className="header__menu-links">Services</NavLink>
                        </li>
                        <li>
                        <NavLink to="/news" className="header__menu-links">Clients</NavLink>
                        </li>
                        <li>
                        <NavLink to="/clients" className="header__menu-links">PriceList</NavLink>
                        </li>
                        <li>
                        <NavLink to="/services" className="header__menu-links">News</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contacts" className="header__menu-links">Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
