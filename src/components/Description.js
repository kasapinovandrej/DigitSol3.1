import React from 'react';
import Design from '../assets/img/art@2x.png';
import Developing from '../assets/img/coding@2x.png';
import Marketing from '../assets/img/bullhorn@2x.png';
import Graphic from '../assets/img/computer@2x.png';

const Description = () => {
    return (
        <div className="mid">
            <div className="mid__wrap">
                <div className="mid__box">
                    <img className="mid__img" src={Design} alt="Design" />
                    <p className="mid__p">Web dizajn</p>
                </div>
                <div className="mid__box">
                    <img className="mid__img" src={Developing} alt="Developing" />
                    <p className="mid__p">Web developing</p>
                </div>
                <div className="mid__box">
                    <img className="mid__img" src={Marketing} alt="Marketing" />
                    <p className="mid__p">Digitalni marketing</p>
                </div>
                <div className="mid__box">
                    <img className="mid__img" src={Graphic} alt="Graphic" />
                    <p className="mid__p">Grafički dizajn</p>
                </div>
            </div>
        </div>
    )
}

export default Description;
