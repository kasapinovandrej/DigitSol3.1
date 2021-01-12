import React from 'react'
import Digit from '../assets/img/digital-marketing.png';

const DigitTime = () => {
    return (
        <section className="digital">
            <div className="digital__wrap">
                <img src={Digit} alt="digitalMarketingPicture" className="digital__img" />
                <h1 className="digital__h1">Mi ćemo Vam pomoći da se krećete kroz digitalno vreme</h1>
            </div>
        </section>
    )
}

export default DigitTime
