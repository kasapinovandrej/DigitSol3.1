import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
const BurgerMenu = () => {
    const [modal, setModal] = useState(false)

    const hideShowModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="nav__burger">
                <button type="button" onClick={hideShowModal} className="nav__button">
                    {modal ? <VscChromeClose /> : <VscMenu />}
                </button>
            </div>
            <div className={modal ? "nav__modalbg" : "hide"} >
                <ul className="nav__modallists">
                    <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/" exact>Naslovna</NavLink></li>
                    <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/portfolio">Portfolio</NavLink></li>
                    <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/about">O Nama</NavLink></li>
                    <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/contact">Kontakt</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default BurgerMenu
