import React from 'react'
import Reasonimg from '../assets/img/Untitled-1@2x.png';

const Reasons = () => {
    return (
        <section className="reasons">
            <div className="reasons__wrap">
                <h1 className="reasons__h1">10 razloga zbog kojih vam je potreban web prostor</h1>
                <img src={Reasonimg} alt="reasonsImg" className="reasons__img" />
            </div>
        </section>

    )
}

export default Reasons
