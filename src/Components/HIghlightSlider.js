import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


export default function HIghlightSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={7}
            pagination={{ clickable: true }}
            grabCursor={true}
        >
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-48 w-48 bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/cruel-war-scenes-digital-painting_456031-162.jpg?t=st=1655286493~exp=1655287093~hmac=b57eafe6dccd6b343789ed2e247e9b26729afe2974738dda74e5facbd3781aaf&w=826)]"></div>
            </SwiperSlide>
        </Swiper >
    )
}
