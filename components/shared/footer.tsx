import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className='footer bg-black text-white mt-[133px]'>
        <div className='w-[1110px] max-md:w-768px max-md:px-10 mx-auto'>
          <div className='w-[101px] h-1 bg-[#D87D4A] mb-[71px]'></div>

          <div className='h-[25px] flex max-md:flex-col justify-between'>
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />

            <ul className='flex gap-[34px] max-md:mt-8 text-[13px] uppercase font-bold tracking-[2px] leading-[25px] decoration-0'>
              <Link href="" className='hover:text-[#D87D4A]'>Home</Link>
              <Link href="/headphones" className='hover:text-[#D87D4A]' >Headphones</Link>
              <Link href="/speakers" className='hover:text-[#D87D4A]'  >Speaker</Link>
              <Link href="/earphones" className='hover:text-[#D87D4A]'>Earphones</Link>
            </ul>
          </div>

          <div className='lg:flex max-md:mt-8 lg:items-center lg:justify-between'>
            <p className='lg:w-[540px] max-md:w-[689px] h-[75px] lg:mt-9 max-md:mt-20 opacity-50 font-medium text-[15px] leading-[25px]'>Audiophile is an all in one stop to fulfill your audio needs. We are a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <div className='flex gap-[2.25px] lg:mt-20 max-md:mt-2
            4 '>
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Facebook Icon"
                width={24}
                height={24}
              />

              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Twitter Icon"
                width={24}
                height={19.5}
              />

              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Instagram Icon"
                width={24}
                height={24}
              />
            </div>
          </div>

          <p className='font-bold text-[15px] leading-[25px] opacity-50 lg:mt-14 max-md:mt-4'>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer;