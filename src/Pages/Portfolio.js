import React from 'react';
import PagesHeader from '../components/PagesHeader';
import HeroImg from '../assets/img/PORTFOLIO/Group 1036.png';
import Gallery from '../components/PortfolioComponents/Gallery';
import Watermarks from '../components/PortfolioComponents/Watermarks';

const Portfolio = () => {
    return (
        <>
            <PagesHeader
                img2={HeroImg}
                title={'portfolio'}
            />
            <Gallery />
            <Watermarks />
        </>
    )
}

export default Portfolio
