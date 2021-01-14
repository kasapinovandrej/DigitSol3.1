import React from 'react';
import TargetImg from '../../assets/img/ABOUT/Group 919.png';
import Trust from '../../assets/img/ABOUT/briefcase.png';
import Support from '../../assets/img/ABOUT/support.png';
import Quality from '../../assets/img/ABOUT/shield-(1).png';

const targetData = [
    {
        img: Trust,
        title: 'Poverenje'
    },
    {
        img: Support,
        title: 'Podrška'
    },
    {
        img: Quality,
        title: 'Kvalitet'
    },
]

const Target = () => {
    return (
        <section className="target">
            <div className="target__wrap">
                <div className="target__box">
                    <h1 className="target__h1">Naše prednosti</h1>
                    <div className="target__box1">
                        <img src={TargetImg} className="target__img" alt="target" />
                        <div className="target__box2">
                            {targetData.map(element => {
                                return (
                                    <div className="target__textbox" key={`${element.img}`}>
                                        <img src={element.img} alt={`${element.img}`} className="target__icon" />
                                        <h2 className="target__h2">{element.title}</h2>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Target;
