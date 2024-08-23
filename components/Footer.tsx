import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='relative max-container padding-container pt-36 flex xs:gap-4 lg:gap-4  pb-10 xs:flex-col bg-[#F5F7FA]'>
      <div className='max-w-[1338px] w-full m-auto block lg:flex'>

        <div className='flex flex-col gap-12 lg:w-1/2'>
          {/* LOGO & TEXT */}
          <div className='flex flex-col gap-4'>
            <div className='logo flex items-center gap-2'>
              <Image src='/img/proxy_logo.png' alt='logo' width={250} height={200} />
            </div>
            <p className='opacity-70 max-w-[380px] md:max-w-[70%]'>LightningProxies offers a complex proxy infrastructure equipped with many proxy solutions in one place. We have Datacenter, Residential, IPv6 & ISP proxies at a cost-effective price.
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div className='social flex gap-4'>
          
            <div className='btn-container flex flexCenter'>
            <span>
                <Image src='/img/footer_discord.png' alt='discord' width={320} height={70} />
              </span>
            </div>
            
          </div>
        </div>

        {/* LINK FOOTER */}
        <div className='lg:w-1/2 flex flex-wrap  md:flex-row xs:gap-16 md:gap-0 md:justify-between px-10 pt-20 lg:pt-0'>
          <FooterCard title='ACCOUNT' link1='Create Account' link2='Log In'  />
          <FooterCard title='PRODUCTS' link1='IPv6' link2='Datacenter' link3='Residential' link4='ISP' />
          <FooterCard title='EXPLORE' link1='FAQs' link2='Terms of Service' link3='Privacy Policy' link4='Cookie Policy'/>
        </div>
      </div>
      <hr />
      <div  className='max-container sm:padding-container block lg:flex justify-between w-full pt-6 items-center'>
        <p className='text-center'>Copyright © 2023 LightningProxies All rights reserved.</p>
        
        {/* SOCIAL MEDIA */}
        <div className='social flex gap-4 justify-center mt-5 lg:mt-0'>
          <Link href='/'>
            <Image src='/img/Telegram.png' alt='telegram' width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/img/Facebook.png' alt='facebook' width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/img/Twitter.png' alt='twitter'  width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/img/Instagram.png' alt='instagram' width={30} height={30} />
          </Link>
          <Link href='/'>
            <Image src='/img/Discord.png' alt='discord' width={30} height={30} />
          </Link>
        </div>
      </div>

    </footer>
  )
}

interface FooterCardProps {
  title: string;
  link1: string;
  link2: string;
  link3?: string;
  link4?: string;
}

const FooterCard = ({title, link1, link2, link3, link4} : FooterCardProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <h6 className='text-2xl font-bold text-proxy-blue'>{title}</h6>
      <ul className='flex flex-col gap-4 mt-4'>
        <Link className='opacity-70 font-bold' href='/'>{link1}</Link>
        <Link className='opacity-70 font-bold' href='/'>{link2}</Link>
        <Link className='opacity-70 font-bold' href='/'>{link3}</Link> 
        {link4 && <Link className='opacity-70 font-bold' href='/'>{link4}</Link>} 
      </ul>                  
    </div>  
  )
}

export default Footer