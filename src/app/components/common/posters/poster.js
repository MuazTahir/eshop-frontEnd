

'use client'
import React from 'react'
import PosterData from './poster-Data'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

function Posters() {
    return (
        <div className='w-[95%] max-w-[1200px] m-auto py-6'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                {PosterData?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative bg-[#002626] text-white rounded-xl overflow-hidden flex flex-col md:h-[400px]'>
                            {/* Left Side Content */}
                            <div className='w-full md:w-1/2 p-6 z-10'>
                                <div className='flex flex-col md:mt-12'>
                                    <p className='text-lg'>{item.order}</p>
                                    <h1 className='text-3xl font-bold'>{item.sale}</h1>
                                    <h2 className='md:text-6xl md:mt-5 md:mb-3 text-yellow-400'>{item.discount} OFF</h2>
                                    <p className='text-sm'>{item.description}</p>
                                    <button className='mt-4 bg-white w-full md:w-1/2 cursor-pointer text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-300'>
                                        {item.button}
                                    </button>
                                </div>
                            </div>

                            {/* Right Side Image */}
                            <div className='relative md:absolute md:right-0 md:top-0 md:w-1/2 h-[300px] md:h-full'>
                                <img
                                    src={item.img}
                                    alt="poster"
                                    className='w-full h-full object-cover rounded-t-xl md:rounded-none md:rounded-r-xl'
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Posters
