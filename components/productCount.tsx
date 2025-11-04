"use client"
import React, {useState} from 'react';

function ProductCount() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div className='w-30 h-12 bg-[#F1F1F1] flex justify-around items-center font-bold text-lg'>
        <button className='font-bold opacity-50 text-2xl' onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button className='font-bold opacity-50 text-2xl' onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default ProductCount;