import React from 'react';
import { ImFacebook2, ImInstagram, ImLinkedin, ImPhone, ImMail3 } from 'react-icons/im';

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header__contact">
                    <a className="header__link" href="tel:0038163-78-28-541"><ImPhone /><p>(00381)63-78-28-541</p></a>
                    <a className="header__link" href="tel:0038169-44-89-990"><ImPhone /><p>(00381)69-44-89-990</p></a>
                    <a className="header__link" href="mailto:office@digitalsolution.rs"><ImMail3 /><p>office@digitalsolution.rs</p></a>
                </div>
                <div className="header__contact header__social">
                    <a className="header__link" target="_blank" href="https://www.facebook.com/digitalsolution.web"><ImFacebook2 className="header__icon" /></a>
                    <a className="header__link" target="_blank" href="https://www.instagram.com/digitalsolution_web/?igshid=31pkfchkf6cd"><ImInstagram className="header__icon" /></a>
                    <a className="header__link" target="_blank" href="https://www.linkedin.com/in/digital-solution-6581831bb/"><ImLinkedin className="header__icon" /></a>
                </div>
            </div>
        </header>
    )
}

export default Header
