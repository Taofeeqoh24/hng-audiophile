import React from 'react';
import Link from 'next/link';

function SpeakerZX7() {
  return (
    <>
      <div className='speaker-zx7 flex mx-auto rounded-lg mt-10'>
        <div className='h-[118px] ml-[95px] my-[101px]'>
          <h1 className='font-bold text-[28px] tracking-[2px]'>ZX7 SPEAKER</h1>
          <button
            className='uppercase w-40 h-12 mt-10 border-2 tracking-[1px] text-[13px] hover:bg-black hover:text-white font-bold'
          >
            <Link href="/products/5">See product</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default SpeakerZX7