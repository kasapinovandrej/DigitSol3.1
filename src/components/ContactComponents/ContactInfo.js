import React from 'react';
import { IoPhonePortraitOutline, IoLocationSharp, IoMailOutline } from 'react-icons/io5';

const contactData = [
    {
        icon: IoPhonePortraitOutline,
        title: 'telefon',
        text1: '(00381)63-78-28-541',
        text2: '(00381)69-44-89-990'
    },
    {
        icon: IoLocationSharp,
        title: 'Adresa',
        text1: 'Kraljevo, Srbija',
        text2: 'Novi Pazar, Srbija'
    },
    {
        icon: IoMailOutline,
        title: 'E-mail',
        text1: 'office@digitalsolution.rs',
    }
]

const ContactInfo = () => {
    return (
        <section className="contactinfo">
            <div className="contactinfo__wrap">
                <h2 className="contactinfo__h2">Stupite u kontakt sa nama!</h2>
                <div className="contactinfo__box">
                    {contactData.map(element => {
                        return (
                            <div className="contactinfo__content" key={`${element.title}`}>
                                <element.icon className="contactinfo__icon" />
                                <h3 className="contactinfo__h3">{element.title}</h3>
                                {element.title === 'E-mail' ?
                                    <a className="contactinfo__a" href={`mailto:${element.text1}`}>
                                        <p className="contactinfo__p">{element.text1}</p>
                                    </a>
                                     :
                                    <a className="contactinfo__a" href={`tel:${element.text1}`}>
                                        <p className="contactinfo__p">{element.text1}</p>
                                    </a>}

                                {element.text2 ?
                                    <a className="contactinfo__a" href={`tel:${element.text2}`}>
                                        <p className="contactinfo__p">{element.text2}</p>
                                    </a> :
                                    null}
                            </div>
                        );
                    })}
                </div>
                <h3 className="contactinfo__h4">Ukoliko imate pitanja za nas, molimo, pošaljite nam poruku!</h3>
            </div>
        </section>
    )
}
export default ContactInfo;