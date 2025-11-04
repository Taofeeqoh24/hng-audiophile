import React from 'react'


interface Props {
  category: string;
};

function CategoryPageHeader({ category}: Props) {
  return (
    <>
      <div className='mt-[98px] text-center text-white font-bold text-[40px] leading-11 tracking-[1.43px] uppercase'>
        {category}
      </div>
    </>
  )
}

export default CategoryPageHeader;