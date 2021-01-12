import React from 'react'
import HeroSwiper from '../components/HeroSwiper';
import Description from '../components/Description';
import Reasons from '../components/Reasons';
import ReasonsSlider from '../components/ReasonsSlider';

const Home = () => {
    return (
        <div>
            <HeroSwiper />
            <Description />
            <Reasons />
            <ReasonsSlider />
        </div>
    )
}

export default Home
