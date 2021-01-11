import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/img/BD-logo.png';

const Navigation = () => {


    return (
        <div className="nav">
            <nav className="nav__wrap">
                <Link to="/" ><img src={Logo} alt="Logo" className="nav__logo" /></Link>
                <ul className="nav__lists">
                    <li className="nav__list"><NavLink className="nav__link" to="/" exact>Naslovna</NavLink></li>
                    <li className="nav__list"><NavLink className="nav__link" to="/portfolio">Portfolio</NavLink></li>
                    <li className="nav__list"><NavLink className="nav__link" to="/about">O Nama</NavLink></li>
                    <li className="nav__list"><NavLink className="nav__link" to="/contact">Kontakt</NavLink></li>
                </ul>
            </nav>

        </div>

    )
}

export default Navigation;
