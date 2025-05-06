'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const images = [
    '/images/5d479f68341a73078529818f527bbd45.jpg',
    '/images/10b6aeb30bfbd0508833d6b6780e2a44.jpg',
    '/images/08db96cc8983ec4fb0fa7ef3ed26a85e.jpg',
    '/images/db70087e262d8d46aa4f271c35d03fd5.jpg',
]

function HeroSection() {
    return (
        <div className="w-full mt-4">
            <h1 className='text-[#002626] uppercase font-bold ml-11 text-2xl'>Our Best Collections</h1>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation={true}
                loop={true}
                className="w-[90%] h-[400px]"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-contain"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSection
