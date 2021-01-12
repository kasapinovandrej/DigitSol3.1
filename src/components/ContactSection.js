import React from 'react';
import { Link } from 'react-router-dom';
import Spaceman from '../assets/img/Group 667.png';
import Rocket from '../assets/img/Group 697.png';
import Astronaut from '../assets/img/Group 685.png';
import { FiArrowDownCircle } from 'react-icons/fi'

const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__wrap">
                <img src={Spaceman} alt="spaceman" className="contact__spaceman" />
                <img src={Rocket} alt="rocket" className="contact__rocket" />
                <img src={Astronaut} alt="astronaut" className="contact__astronaut" />
                <div className="contact__textWrap">
                    <h1 className="contact__h1">ukoliko želite naše usluge</h1>
                    <FiArrowDownCircle className="contact__icon" />
                    <Link to="/contact" className="contact__link"><button className="contact__btn">pišite nam ovde</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Contact;