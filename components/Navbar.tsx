"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import Button from './Button'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav className={scrolling ? 'navbar-scroll padding-container flex justify-between py-6 fixed z-50 rounded-[12px] flex-col lg:flex-row mt-10 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-[90vw] shadow-2'  : 
                                              'max-container padding-container flex justify-between py-6 rounded-[12px] flex-col lg:flex-row shadow-2 mt-10 lg:w-[90vw] shadow-2'}>
        <div className='flex justify-between space-x-10 items-center'>
            <div className='left'>
                <Link href='/' className='flexCenter gap-2'>
                    <Image src='/img/proxy_logo.png' alt='logo' width={200} height={50}/>
                </Link>            
            </div>

            {/*-------------- MENU ICON MOBILE -----------------*/}
            <div className="block cursor-pointer lg:hidden rounded-lg">
            {
                !navbarOpen ? (
                    <div className='flex gap-[25px]'>
                        <div className=' md:block hidden'>

                        <Button type='button' title='Get Started' variant='text-white bg-proxy-blue md:py-[14px] md:px-[25px] rounded-[18px]'  icon='/img/Icon.png' />
                        </div>
                        <button onClick={() => setNavbarOpen(true)} className='border p-[14px] rounded-[12px] bg-[#C5DCFF]'>
                            <Bars3Icon className='h-5 w-5 text-proxy-blue' />
                        </button>
                    </div>
                ) : (
                    <div className='flex gap-[25px]'>
                           <div className=' md:block hidden'>
                        <Button type='button' title='Get Started' variant='text-white bg-proxy-blue md:py-[14px] md:px-[25px] rounded-[18px]'  icon='/img/Icon.png' />
                       </div>
                        <button onClick={() => setNavbarOpen(false)} className='border p-[14px] rounded-[12px] bg-[#C5DCFF]'>
                            <XMarkIcon className='h-5 w-5 text-proxy-blue' />
                        </button>
                    </div>
                )
            }
            </div> 
        </div>
        {navbarOpen ? (<hr className='mt-5'/>) : null}

        <div className='flex'>
            <div className='middle w-full '>
                <ul className="hidden h-full gap-12 lg:flex justify-between">
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="flexCenter cursor-pointer transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    ))}
                </ul>

                {/*-------------- NAVBAR LINKS MOBILE -----------------*/}
                {navbarOpen ? 
                    <ul className='lg:hidden flex justify-between w-full p-6'>
                        {NAV_LINKS.map((link) => (
                            <li className="flexCenter cursor-pointer transition-all font-bold hover:font-bold px-3 py-7.5">
                                <Link href={link.href} key={link.key}>
                                    {link.label}
                                </Link> 
                            </li>
                        ))}
                    </ul>
                    : null
                } 
            </div>
        </div>
        


        <div className='right lg:flexCenter hidden gap-4'>
            <Button type='button' title='Login' variant='btn_white' />
            <Button type='button' title='Get Started' variant='text-white bg-proxy-blue py-[14px] px-[25px] rounded-[18px]'  icon='/img/Icon.png' />
        </div>         

        
    </nav>
  )
}

export default Navbar