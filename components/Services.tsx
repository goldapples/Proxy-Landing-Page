import React from 'react'
import Title from './Title'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='max-container padding-container py-10 xs:h-full gap-8'>
      <div className='left py-4 flex flex-col justify-center'>
        <Title title='EXCLUSIVE FEATURES' subtitle='Only Proxy service to do everything right for the customers' />
        <p className='text-[#191825] lg:max-w-[35%] md:max-w-[70%] sm:max-w-[80%] text-opacity-75 text-xl text-center m-auto py-8'>We offer various proxy products, from IPv6 to ISP creating the best solutions of every type of task. </p>
      </div>

      <div className='right py-4 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start hide-scrollbar overflow-x-auto'>
        <ServiceCard icon="/img/Group1.png" title='Variety' subtitle='We offer 4 types of proxies including Datacenter & Residential, perfect for any use case or purpose.' />
        <ServiceCard icon="/img/Group2.png" title='Amazing Support' subtitle='We are available 24/7 on our special Live chat, ready to answer any querie you might have.' />
        <ServiceCard icon="/img/Group3.png" title='Top-Tier Proxies' subtitle='Our proxies are one of a kind with Lightning Fast Speeds and High Quality IPs, having 10GBps uplink on our ISP infrastructure makes us unique.' />
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard = ({icon, title, subtitle} : ServiceCardProps) => {
  return (
    <div className='bg-white h-full w-full xs:py-10 md:py-0 min-h-[225px] rounded-3xl shadow-2 px-12 flex flex-col gap-4 items-start justify-center'>
      <Image src={icon} alt='icon' width={50} height={50} />
      <div className='flex flex-col items-start gap-3'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-[14px] text-start opacity-60'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Services