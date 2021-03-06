import React from 'react'
import PagesHeader from '../components/PagesHeader';
import ContactInfo from '../components/ContactComponents/ContactInfo';
import Form from '../components/ContactComponents/Form';
import Form2 from '../components/ContactComponents/Form2';

import Hero1 from '../assets/img/CONTACT/Group 716.png';
import Hero2 from '../assets/img/CONTACT/Group 727.png';

const Contact = () => {
    return (
        <>
            <PagesHeader
                img1={Hero1}
                img2={Hero2}
                title={'kontakt'} />
            <ContactInfo />
            {/* <Form /> */}
            <Form2 />
        </>
    )
}

export default Contact
