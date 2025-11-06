import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Speaker() {
  return (
    <>
      <div className="speaker flex lg:flex-row flex-col items-center justify-center mx-auto rounded-lg top-[168px] px-4">
        <div className="lg:ml-[117px] mt-24 max-md:mt-[52px]">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.svg"
            alt="Speaker Image"
            width={410.23}
            height={493}
            className="speaker-image"
          />
        </div>

        <div className="w-[349px] h-[303px] lg:mt-[133px] lg:ml-[138px] lg:mb-[124px] mt-16 text-white text-center lg:text-left">
          <h1 className="font-bold leading-[58px] tracking-[2px] text-[56px]">ZX9 SPEAKER</h1>
          <p className="font-normal text-[15px] leading-[25px] opacity-75 mt-6">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <button className="uppercase w-40 h-12 mt-10 bg-black hover:bg-[#4C4C4C] tracking-[1px] text-[13px] font-bold">
            <Link href="/products/6">See product</Link>
          </button>
        </div>
      </div>

    </>
  )
}

export default Speaker