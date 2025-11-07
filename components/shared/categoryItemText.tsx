import React from 'react';
import Link from 'next/link';

interface Props {
  isNew: boolean;
  name: string;
  description: string;
  id: string | number;
}

function CategoryItemText({isNew, name, description, id}: Props) {
  return (
    <>
      <div className='hero-text lg:mt-32 '>
        {isNew ? (<h3 className='tracking-[10px] text-sm text-[#D87D4A] uppercase font-normal'>New Product</h3>) : null}
        <h1 className='uppercase font-bold tracking-[1.43px] pt-6 text-[40px] leading-11'>{name}</h1>
        <p className='w-[445px] opacity-50 text-[15px] leading-[25px] pt-6 font-normal'>{description}</p>

        <button className='mt-10 bg-[#D87D4A] w-40 h-12 font-bold uppercase tracking-[1px] text-[13px]'>
          <Link href={`products/${id}`}>See Product</Link>
        </button>
      </div>
    </>
  )
}

export default CategoryItemText;