"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearCart, selectCartTotal } from '@/store/cartSlice';


interface Props {
  onClose: () => void;
}

function Cart({ onClose }: Props) {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  //total
    const total = cart.reduce((sum, product) => {
      const price = Number(product.price) || 0;
      const count = Number(product.count) || 0;
      return sum + (price * count);
  }, 0);

  // Filter out dummy item
  const validCart = cart.filter(item => item.id && item.price && item.count);

  return (
    <>
      <div
        onClick={onClose}
        className='absolute h-screen inset-0 w-screen bg-black/50'
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className='z-1 absolute top-20 right-50 min-h-[20vh] min-w-[30vw] bg-white text-black p-9 uppercase'
        >
          <div className='flex justify-between'>
            <div className='font-bold text-[18px] tracking-[1.29px] uppercase'>
              Cart ({validCart.length})
            </div>
            <div
              onClick={() => dispatch(clearCart())}
              className='font-normal cursor-pointer opacity-50 text-[15px] leading-[25px] underline'
            >
              Remove All
            </div>
          </div>

          {validCart.length === 0 ? (
            <div className='text-center py-8 opacity-50'>
              Your cart is empty
            </div>
          ) : (
            <>
              <div className='max-h-[300px] overflow-y-auto'>
                {validCart.map((product) => (
                  <div key={product.id} className='flex mt-6 justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                      <div>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={64}
                          height={64}
                          className='rounded-lg object-cover'
                        />
                      </div>

                      <div className='flex flex-col'>
                        <h3 className='font-bold text-[15px] leading-[25px]'>
                          {product.name}
                        </h3>
                        <h4 className='opacity-50 font-bold text-[14px] leading-[25px]'>
                          $ {product.price.toLocaleString()}
                        </h4>
                      </div>
                    </div>

                    <div className='bg-[#F1F1F1] px-4 py-2 flex items-center justify-center'>
                      <span className='font-bold text-[13px] opacity-50'>
                        x{product.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className='flex justify-between mt-8'>
                <div className='opacity-50 font-medium text-[15px] leading-[25px] uppercase'>
                  Total
                </div>
                <div className='font-bold text-[18px]'>
                  $ {isNaN(total) ? '0' : total.toLocaleString()}
                </div>
              </div>

              <Link href="/checkout" onClick={onClose}>
                <button className='bg-[#D87D4A] mt-6 text-white w-full h-12 font-bold uppercase tracking-[1px] text-[13px] hover:bg-[#FBAF85] transition-colors'>
                  Checkout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart