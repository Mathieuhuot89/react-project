import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import "./NavbarStyles.css";
import { Link } from 'react-router-dom';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurgerClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>Majestic Eat</h1>

             {/* Afficher la navbar et le Burger en fonction du responsive */}
            <div className='menu-icons' onClick={handleBurgerClick}>
                <i className={isOpen ? "fas fa-times" : 'fas fa-bars'}></i>
            </div>
            <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                            </Link>
                        </li>
                    )
                })}
                <button>Sign up</button>
            </ul>
        </nav>
    )
}

export default Navbar
