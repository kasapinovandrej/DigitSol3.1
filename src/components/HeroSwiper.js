import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import Hero1 from '../assets/img/slic/1.jpg';
import Hero2 from '../assets/img/slic/2.jpg';
import Hero3 from '../assets/img/slic/3.jpg';
import Hero4 from '../assets/img/slic/4.jpg';

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
                    <SwiperSlide >
                        <div className="swiper__slide">
                            <div className="swiper__text">
                                <div>
                                    <h1 className="swiper__h1">Web dizajn</h1>
                                    <h4 className="swiper__h4">Izrada web sajtova i održavanje</h4>
                                </div>
                            </div>
                            <div className="swiper__imagebox">
                                <img className="swiper__image" src={Hero1} alt="Hero1" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__slide">
                            <div className="swiper__text">
                                <div>

                                    <h1 className="swiper__h1">Web developing</h1>
                                    <h4 className="swiper__h4">Radimo na razvoju Vaše web platforme</h4>
                                </div>
                            </div>
                            <div className="swiper__imagebox">
                                <img className="swiper__image" src={Hero2} alt="Hero1" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__slide">
                            <div className="swiper__text">
                                <div>

                                    <h1 className="swiper__h1">Digitalni marketing</h1>
                                    <h4 className="swiper__h4">Vreme je da Vaša kompanija zaroni u digitalno vreme</h4>
                                </div>
                            </div>
                            <div className="swiper__imagebox">
                                <img className="swiper__image" src={Hero3} alt="Hero1" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper__slide">
                            <div className="swiper__text">
                                <div>

                                    <h1 className="swiper__h1">Grafički dizajn</h1>
                                    <h4 className="swiper__h4">Nudimo sve vrste grafičkih rešenja</h4>
                                </div>
                            </div>
                            <div className="swiper__imagebox">
                                <img className="swiper__image" src={Hero4} alt="Hero1" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default HeroSwiper
