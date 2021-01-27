import React, { useState } from 'react';
import Spaceman from '../../assets/img/Group 667.png';
import emailjs from 'emailjs-com';

const Form2 = () => {

    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_20xxvdm', 'template_g85fewt', e.target, 'user_nCaKlp04QSVZlTvLXByUP')
            .then((result) => {
                console.log(result.text);
                setMessageSent(true)
            }, (error) => {
                console.log(error.text);
                setMessageError(true)
            });
        e.target.reset();

        setTimeout(() => {
            setMessageSent(false)
            setMessageError(false)
        }, 3000);
    }

    return (
        <form className="form" onSubmit={formSubmit}>
            <div className="form__wrap">
                {messageSent ? <div className='form__modal'>
                    <p className="form__p">Hvala što ste nas kontaktirali!</p></div> : messageError ? <div className='form__modal'>
                        <p className="form__p">Došlo je do greške! Molim pokušajte ponovo</p></div> : null}
                <div className="form__box">
                    <img src={Spaceman} alt="spaceman" className="form__spaceman" />
                    <div className="form__leftbox">
                        <h2 className="form__h2">Pišite nam</h2>
                        <div className="form__inputbox">
                            <input className="form__input"
                                name="name"
                                type="text"
                                placeholder="Ime i prezime"
                                required
                            />
                            <label htmlFor="name" className="form__label">Ime i prezime</label>
                        </div>
                        <div className="form__inputbox">
                            <input className="form__input"
                                name="email"
                                type="email"
                                placeholder="E-mail Adresa"
                                required
                            />
                            <label htmlFor="email" className="form__label" >E-mail adresa</label>
                        </div>
                    </div>
                    <div className="form__rightbox">
                        <div className="form__messagebox">
                            <label htmlFor="text" className="form__message">Vaša poruka</label>
                            <textarea className="form__textarea"
                                name="message"
                                placeholder="Unesite Vašu poruku ovde..."
                                required
                            ></textarea>
                        </div>
                        <button className="form__button" type="submit">pošaljite poruku</button>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default Form2;
