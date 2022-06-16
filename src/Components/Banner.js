import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


export default function Banner() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            grabCursor={true}
        >
            <SwiperSlide>
                <div className="h-96 bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/sports-abstract-poster-blue-yellow-colors_1017-32335.jpg?t=st=1655361573~exp=1655362173~hmac=ba6c7ea6b1e4bf19a9ea701aad15600e869536eab880d86d5c68442b83d02f18&w=996)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-96 bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60377.jpg?t=st=1655361573~exp=1655362173~hmac=cdecb4722761e62dbe08ff3be1914506ccdd3ec6336ffac04f171f85ba8d58e5&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-96 bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/sports-chamionship-background-with-red-black-smoky-clouds_1017-32333.jpg?t=st=1655361573~exp=1655362173~hmac=b73666627cf4caed656f3b81407622a577f0593a412c61135c8116d0b79421ca&w=996)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-96 bg-cover bg-center bg-[url(https://img.freepik.com/free-vector/abstract-black-friday-background-with-red-shapes_1361-3468.jpg?t=st=1655361666~exp=1655362266~hmac=cd3620673010cb9b38d0e21cfb4e2a2e8df1b13f72fba06b611e8212cd86c729&w=826)]"></div>
            </SwiperSlide>
        </Swiper >
    );
};