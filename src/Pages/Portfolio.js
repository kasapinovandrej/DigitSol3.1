import React from 'react';
import PagesHeader from '../components/PagesHeader';
import HeroImg from '../assets/img/PORTFOLIO/Group 1036.png';

const Portfolio = () => {
    return (
        <>
            <PagesHeader
                img2={HeroImg}
                title={'portfolio'}
            />
            <div style={{ height: "55vh" }}>
                Portfolio
            </div>
        </>
    )
}

export default Portfolio
