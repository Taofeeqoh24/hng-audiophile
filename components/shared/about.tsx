import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <>
      <div
        className="
          flex 
          lg:flex-row 
          flex-col-reverse 
          lg:gap-[125px] 
          justify-center 
          items-center 
          mx-auto 
          lg:w-[1110px] 
          lg:h-[588px] 
          md:w-[689px] 
          md:h-[633px] 
          w-[327px] 
          h-[698px] 
          mt-40 
          md:mt-24
        "
      >
        {/* Text Section */}
        <div className="
          lg:w-[445px] 
          md:w-[689px] 
          w-[327px]
          md:text-center 
          lg:text-left 
          text-center 
          lg:mt-[147px]
          mt-10
          md:mt-[63px]
        ">
          <h1 className="uppercase font-bold lg:text-[40px] md:text-[40px] text-[28px] leading-11 tracking-[1.43px]">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
          </h1>

          <p className="mt-8 font-normal text-[15px] leading-[25px] opacity-50">
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We have a large showroom and
            luxury demonstration rooms available for you to browse and experience a wide range of
            our products. Stop by our store to meet some of the fantastic people who make
            Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/assets/man.png"
            alt="Man Image"
            width={540}
            height={568}
            className="rounded-lg lg:w-[540px] lg:h-[568px] md:w-[689px] md:h-[300px] w-[327px] h-[300px] object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default About;
