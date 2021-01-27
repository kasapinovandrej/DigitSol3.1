import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../assets/img/BD-logo.png';
import { motion } from 'framer-motion';



const Navigation = () => {
    const [navbar, setNavbar] = useState(false);

    const stickyNav = () => {
        if (window.scrollY >= 595) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', stickyNav);

    return (
        <>
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
            {navbar ? <motion.div className="nav nav__fixed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                <nav className="nav__wrap">
                    <Link to="/" ><img src={Logo} alt="Logo" className="nav__logo" /></Link>
                    <ul className="nav__lists">
                        <li className="nav__list"><NavLink className="nav__link" to="/" exact>Naslovna</NavLink></li>
                        <li className="nav__list"><NavLink className="nav__link" to="/portfolio">Portfolio</NavLink></li>
                        <li className="nav__list"><NavLink className="nav__link" to="/about">O Nama</NavLink></li>
                        <li className="nav__list"><NavLink className="nav__link" to="/contact">Kontakt</NavLink></li>
                    </ul>
                </nav>
            </motion.div> : null}

        </>
    )
}

export default Navigation;
