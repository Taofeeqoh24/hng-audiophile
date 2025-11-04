import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <>
      <div className='flex max-md:flex-col-reverse lg:gap-[125px] mx-auto lg:w-[1110px] lg:h-[588px] max-md:h-[633px] max-md:w-[689px] mt-40 max-md:mt-24'>
        <div className='w-[445px] max-md:w-[573px] max-md:mx-auto max-md:text-center mt-[147px] max-md:mt-[63px]'>
          <h1 className='uppercase font-bold text-[40px] leading-11 tracking-[1.43px]'>Bringing you the <span className='text-[#D87D4A]'>best</span> audio gear</h1>
          <p className='mt-8 font-normal text-[15px] leading-[25px] opacity-50' >Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>

        <div className="">
          <Image
            src="/assets/man.png"
            alt='Man Image'
            width={540}
            height={568}
            className='rounded-lg about-image'
          ></Image>
        </div>
      </div>
    </>
  )
}

export default About