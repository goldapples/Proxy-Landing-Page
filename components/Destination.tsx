'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

const Destination = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-16 py-12'>

      <div className=''>
        <Title title='OUR TEAM' subtitle='Our Amazing Team is Lead by' />
      </div>

      <div className='bottom block items-center justify-between lg:flex'>
        <div className='h-full w-full xs:py-10 md:py-10 min-w-[250px] px-4 flex flex-row gap-4 items-start justify-center'>
          <Image src='/img/Group4.png' alt='icon' width={50} height={50} />
          <div className='flex flex-col items-start'>
            <h3 className='text-lg font-bold'>Hardin</h3>
            <p className='text-[14px] text-start text-proxy-blue font-bold'>HEAD-TEAM LIGHTNING PROXIES</p>
          </div>
        </div>
        <div className='h-full w-full xs:py-10 md:py-0 min-w-[250px] px-4 flex flex-row gap-4 items-start justify-center'>
          <Image src='/img/Group5.png' alt='icon' width={50} height={50} />
          <div className='flex flex-col items-start'>
            <h3 className='text-lg font-bold'>JustWatch</h3>
            <p className='text-[14px] text-start text-proxy-blue font-bold'>HEAD-TEAM LIGHTNING PROXIES</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}



export default Destination