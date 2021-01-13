import React from 'react';
import Facebook from '../assets/img/marketSlider/1.jpg';
import GoogleAds from '../assets/img/marketSlider/2.jpg';
import GoogleAnaly from '../assets/img/marketSlider/3.jpg';
import Instagram from '../assets/img/marketSlider/4.jpg';
import Mailchimp from '../assets/img/marketSlider/5.jpg';
import Seo from '../assets/img/marketSlider/6.jpg';

const pictures = [Facebook, GoogleAds, GoogleAnaly, Instagram, Mailchimp, Seo];

const Marketing = () => {
    return (
        <section className="marketing">
            <div className="marketing__pictures">
                {pictures.map(image => {
                    return (
                        <img key={`${image}`} src={image} alt={`${image}`} className="marketing__img" />
                    );
                })}
                {/* <img src="img/marketSlider/facebook_marketing.png" alt="1" class="marketing__img" /> */}
            </div>
        </section>
    );
}

export default Marketing;