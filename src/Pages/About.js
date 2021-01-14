import React from 'react';
import PagesHeader from '../components/PagesHeader';
import HeroImg from '../assets/img/ABOUT/Group 842.png';

const About = () => {
    return (
        <>
            <PagesHeader
                img2={HeroImg}
                title={'o nama'} />
            <div style={{ height: "55vh" }}>
                About us
        </div>
        </>
    )
}

export default About
