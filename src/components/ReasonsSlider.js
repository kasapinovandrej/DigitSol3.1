import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Data from '../Data/Data';

SwiperCore.use([Navigation, Pagination]);

console.log(Data);

const ReasonsSlider = () => {
    return (
        <section className="textslider" >
            <div className="textslider__wrap">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                >
                    {Data.map(el => {
                        return (
                            <SwiperSlide>
                                <div className="textslider__box">
                                    <h1 className="textslider__h1">{el.title}</h1>
                                    <p className="textslider__p">{el.text}</p>
                                </div>
                            </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default ReasonsSlider
