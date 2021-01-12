import React from 'react';
import graphicDesign from '../assets/img/graphic-design.png';
import Ai from '../assets/img/Ai.png';
import Id from '../assets/img/Id.png';
import Ps from '../assets/img/PS.png';
import XD from '../assets/img/XD.png';

const BrendDesign = () => {
    return (
        <section className="design">
            <div className="design__wrap">
                <div className="design__box">
                    <h1 className="design__h1">Vašoj kompaniji je potreban brend dizajn?</h1>
                    <p className="design__p">Nudimo sve vrste grafičkih rešenja</p>
                </div>
                <img src={graphicDesign} alt="graphicDesign" className="design__img" />
                <div className="design__pngWrap">
                    <img src={Ai} alt="Ai" className="design__png" />
                    <img src={Id} alt="Id" className="design__png" />
                    <img src={Ps} alt="PS" className="design__png" />
                    <img src={XD} alt="XD" className="design__png" />
                </div>
            </div>
        </section>
    )
}

export default BrendDesign;
