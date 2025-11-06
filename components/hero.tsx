import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <>
      <div className=''>
        <div className='hero-text text-white text-center lg:mt-32 lg:text-left'>
          <h3 className='tracking-[10px] text-sm opacity-50 uppercase font-normal xs:text-sm'>New Product</h3>
          <h1 className='uppercase font-bold tracking-[2px] pt-6 lg:text-[56px] text-[48px] leading-[50px] lg:leading-[58px]'>XX99 Mark II Headphones</h1>
          <p className='w-[349px] opacity-75 text-[15px] leading-[25px] pt-6 font-medium'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

          <button className='mt-10 bg-[#D87D4A] w-40 h-12 p-2 font-bold uppercase tracking-[1px] text-[13px] hover:bg-[#FBAF85]'>
            <Link href="/products/4">See Product</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero