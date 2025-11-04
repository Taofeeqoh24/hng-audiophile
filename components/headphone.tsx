import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Earphones() {
  return (
    <>
      <div className='flex gap-[30px] max-md:gap-[11px] mx-auto max-md:w-[689px] w-[1110px] h-80 mt-12'>
        <div className='earphone'>
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt='Earphones Image'
            width={540}
            height={320}
            className='rounded-lg h-80'
          ></Image>
        </div>

        <div className='w-[540px] max-md:w-[339px] h-80 bg-[#F1F1F1] rounded-lg'>
          <div className='lg:ml-[95px] max-md:ml-[41px] my-[101px]'>
            <h1 className='font-bold text-[28px] tracking-[2px]'>YX1 EARPHONES</h1>
            <button 
              className='uppercase w-40 h-12 mt-10 border-2 tracking-[1px] text-[13px] font-bold hover:bg-black hover:text-white'
            >
              <Link href="/products/1">See product</Link> 
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Earphones;