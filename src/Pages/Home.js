import React from 'react'
import HeroSwiper from '../components/HeroSwiper';
import Description from '../components/Description';
import Reasons from '../components/Reasons';
import ReasonsSlider from '../components/ReasonsSlider';
import DigitTime from '../components/DigitTime';
import BrendDesign from '../components/BrendDesign';
import Responsive from '../components/Responsive';

const Home = () => {
    return (
        <div>
            <HeroSwiper />
            <Description />
            <Reasons />
            <ReasonsSlider />
            <DigitTime />
            <BrendDesign />
            <Responsive />
        </div>
    )
}

export default Home
