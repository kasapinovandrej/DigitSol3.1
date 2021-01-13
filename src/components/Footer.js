import React from 'react';
import { ImPhone, ImMail3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Boostr-digital-logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrap">
                <div className="footer__box">
                    <Link to="/" className="footer__a"><img src={Logo} alt="footerLogo"
                        className="footer__logo" /></Link>
                    <div className="footer__info">
                        <h3 className="footer__h3">Informacije</h3>
                        <ul className="footer__list">
                            <Link to="/about" className="footer__link">O nama</Link>
                            <Link to="/contact" className="footer__link">Kontakt</Link>
                            <Link to="/portfolio" className="footer__link">Portfolio</Link>
                        </ul>
                    </div>
                    <div className="footer__info">
                        <h2 className="footer__h3">Kontakt</h2>
                        <a href="tel:0038163-78-28-541" className="footer__link">
                            <ImPhone className="footer__ico" />
                            <p className="footer__p">(00381)63-78-28-541</p>
                        </a>
                        <a href="tel:0038169-44-89-990" className="footer__link">
                            <ImPhone className="footer__ico" />
                            <p className="footer__p">(00381)69-44-89-990</p>
                        </a>
                        <a href="mailto:office@digitalsolution.com" className="footer__link">
                            <ImMail3 className="footer__ico" />
                            <p className="footer__p">office@digitalsolution.rs</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer__rights">
                <h2 class="footer__textrights">&copy; 2020. Digital Solution. All rights reserved!</h2>
            </div>
        </footer>
    )
}

export default Footer;
