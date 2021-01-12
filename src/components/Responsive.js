import React, { useState, useEffect } from 'react';
import Image1 from '../assets/img/responsiveImg/1.png'
import Image2 from '../assets/img/responsiveImg/2.png'
import Image3 from '../assets/img/responsiveImg/3.png'

const Responsive = () => {
    const imgArrey = [Image1, Image2, Image3];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setIndex(index => index === 2 ? index = 0 : index + 1)
        }, 2000)
    }, [])

    return (
        <section className="responsive">
            <div className="responsive__wrap">
                <img src={imgArrey[index]} alt="responsive" className="responsive__img" />
                <div className="responsive__textBox">
                    <h1 className="responsive__h1">responsive web site</h1>
                    <p className="responsive__p">Vaš sajt će biti prilagođen svim uređajima!</p>
                </div>
            </div>
        </section>
    );
};

export default Responsive;