import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import image from '../../img/slider/cinelli.jpeg'

export default function MainSlider() {

  return (
    <Swiper
      className='mainSlider'
      spaceBetween={0}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop={true}
      pagination={{
        clickable: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide
        className='mainSlider__slide'
        >
        <img src={image} className='mainSlider__image' alt="" />
      </SwiperSlide>
      <SwiperSlide
        className='mainSlider__slide'
        >
        <img src={image} className='mainSlider__image' alt="" />
      </SwiperSlide>
      <SwiperSlide
        className='mainSlider__slide'
        >
        <img src={image} className='mainSlider__image' alt="" />
      </SwiperSlide>

  </Swiper>

  )
}
