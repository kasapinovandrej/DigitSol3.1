import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { VscMenu, VscChromeClose } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';

const BurgerMenu = () => {
    const [modal, setModal] = useState(false)

    const hideShowModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div className="nav__burger">
                <motion.button type="button" onClick={hideShowModal} className="nav__button" whileHover={{ scale: 1.1 }} whileTap={{ y: 3 }}>
                    {modal ? <VscChromeClose /> : <VscMenu />}
                </motion.button>
            </div>
            <AnimatePresence exitBeforeEnter onExitComplete>
                {modal ? <motion.div className="nav__modalbg"
                    initial={{ opaciti: 0, x: '100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ease: "easeInOut" }}
                    exit={{ opacity: 0, y: '-100vh' }}>
                    <ul className="nav__modallists">
                        <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/" exact>Naslovna</NavLink></li>
                        <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/portfolio">Portfolio</NavLink></li>
                        <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/about">O Nama</NavLink></li>
                        <li onClick={hideShowModal}><NavLink className="nav__modallink" to="/contact">Kontakt</NavLink></li>
                    </ul>
                </motion.div> : null}

            </AnimatePresence>
        </>
    )
}

export default BurgerMenu
