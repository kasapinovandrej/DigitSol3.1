import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import HeroSwiperData from '../Data/HeroSwiperData';

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const HeroSwiper = () => {
    return (
        <div className="swiper">
            <div className="swiper__wrap">
                <Swiper
                    style={{ width: "100 %", height: "100%" }}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 4000 }}
                >
                    {HeroSwiperData.map(el => {
                        return (
                            <SwiperSlide key={el.title}>
                                <div className="swiper__slide">
                                    <div className="swiper__text">
                                        <div>
                                            <h1 className="swiper__h1">{el.title}</h1>
                                            <h4 className="swiper__h4">{el.text}</h4>
                                        </div>
                                    </div>
                                    <div className="swiper__imagebox">
                                        <img className="swiper__image" src={el.image} alt={`${el.image}`} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default HeroSwiper
