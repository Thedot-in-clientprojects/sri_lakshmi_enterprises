import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import img1 from '../../assets/img/gallery/11.png';
import img2 from '../../assets/img/gallery/12.png';
import img3 from '../../assets/img/gallery/13.png';

SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

function DetailsCarousel() {
    return (
        <div>
            <Swiper navigation pagination className="service-gallery">
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img1})` }}
                    />
                    hello
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img2})` }}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-service-photo bg-cover"
                        style={{ backgroundImage: `url(${img3})` }}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default DetailsCarousel;
