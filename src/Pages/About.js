import React from 'react';
import PagesHeader from '../components/PagesHeader';
import HeroImg from '../assets/img/ABOUT/Group 842.png';
import Mission from '../components/AboutUsComponent/Mission';
import Target from '../components/AboutUsComponent/Target';


const About = () => {
    return (
        <>
            <PagesHeader
                img2={HeroImg}
                title={'o nama'} />
            <Mission />
            <Target />
        </>
    )
}

export default About
