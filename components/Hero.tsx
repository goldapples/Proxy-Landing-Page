import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col'>
      
      <div className='relative z-2 flex flex-1 flex-col'>
        {/* <div className='flex shadow gap-2 bg-white w-[215px] text-[#F85E9F] rounded-3xl py-3 px-6' /> */}
          <p className='font-semibold text-center text-proxy-blue'>ABOUT US</p>
        <h1 className=' md:text-7xl sm:text-5xl xm:text-2xl xs:text-1 font-semibold flex justify-center sm:items-end items-center' >The Most <span><Image src='/img/code.png' alt='frame' width={500} height={25} className='w-auto m-auto xm:w-full' /> </span>Complex</h1>
        <h1  className='md:text-7xl sm:text-5xl xm:text-2xl font-semibold flex justify-center py-6' >
        Proxy Network
        </h1>
        <p className='text-[#191825] lg:max-w-[50%] md:max-w-[75%] text-opacity-75 text-xl m-auto text-center'>Our first priority is customer satisfaction, the main reason why our team is so dedicated.
        Make sure to not miss out this opportunity. </p>
        <div className='btn-container flex gap-4 flexCenter pt-6'>
          <Button type='button' title='Get Started Today' variant='bg-[#C5DCFF] text-proxy-blue rounded-[20px] border  py-[23px] px-[78px]' icon='/img/Icon1.png' />
        </div>
      </div>

      <div className='relative z-1 flexCenter first-line:flex-1'>
        <Image src='/img/business.png' alt='frame' width={500} height={25} className='h-full w-auto'/>          
      </div>
    </section>
  )
}

export default Hero