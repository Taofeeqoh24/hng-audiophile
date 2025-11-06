import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Earphones() {
  return (
    <>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-[30px] max-md:gap-[11px] mx-auto w-full max-w-[1110px] px-4 mt-12">
        {/* Image section */}
        <div className="earphone flex justify-center">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="Earphones Image"
            width={540}
            height={320}
            className="rounded-lg h-80 w-full object-cover"
          />
        </div>

        {/* Text section */}
        <div className="w-[540px] max-md:w-[339px] h-80 bg-[#F1F1F1] rounded-lg flex flex-col justify-center items-center lg:items-start">
          <div className="lg:ml-[95px] max-md:ml-0 text-center lg:text-left">
            <h1 className="font-bold text-[28px] tracking-[2px]">YX1 EARPHONES</h1>
            <button
              className="uppercase w-40 h-12 mt-10 border-2 tracking-[1px] text-[13px] font-bold hover:bg-black hover:text-white"
            >
              <Link href="/products/1">See product</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Earphones
