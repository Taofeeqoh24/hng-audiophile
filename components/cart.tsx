"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart } from '@/store/cartSlice';


interface Props {
  onClose: () => void;
}

function Cart({ onClose }: Props) {
  const { cart } = useAppSelector((state) => state.cart);
  // const [count, setCount] = useState(0);
  const dispatch = useAppDispatch();
  return (
    <>
      <div
        onClick={onClose}
        className='absolute h-screen inset-0 w-screen bg-black/50'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='z-1 absolute top-28 right-50 min-h-[20vh] min-w-[30vw] bg-white text-black p-9 uppercase'
        >
          <div className='flex justify-between'>
            <div className='font-bold text-[18px] tracking-[1.29px] uppercase'>Cart</div>
            <div
              onClick={() => dispatch(clearCart())}
              className='font-normal cursor-pointer opacity-50 text-[15px] leading-[25px] underline'
            >
              Remove All
            </div>
          </div>
          <div>
            {cart.map((product) => {
              return (
                <div key={product.id} className='flex mt-6 justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <div>
                      <Image
                        src={product.image}
                        alt='headphones'
                        width={64}
                        height={64}
                      />
                    </div>

                    <div className='flex flex-col '>
                      <h3 className='font-bold text-sm leading-[25px]'>{product.name}</h3>
                      <h4 className='opacity-50 font-bold text-sm leading-[25px]'>$ {product.price}</h4>
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <h2 className='text-[0.75rem]'>Count</h2>
                    <h1 className='font-extrabold'>
                      {product.count}
                    </h1>
                  </div>

                </div>
              );
            })}
          </div>
          <div className='flex justify-between mt-8'>
            <div className='opacity-50 font-normal text-[15px] leading-[25px]'>Total</div>
            <div className='font-bold text-[18px]'>$ $$</div>
          </div>
          <button
            className='bg-[#D87D4A] mt-6 text-white w-[313px] h-12 font-bold uppercase tracking-[1px] text-[13px] hover:bg-[#FBAF85]'
          >
            Checkout
          </button>
        </div>
      </div>

    </>
  )
}

export default Cart