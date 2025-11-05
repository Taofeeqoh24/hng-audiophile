/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
// import ProductCount from './productCount';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addToCart, startNewCart } from '@/store/cartSlice';


interface Props {
  product: any;
}

function Products({ product }: Props) {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  console.log(cart)
  return (
    <>
      <div className='w-[1110px] h-[560px] mt-40 mx-auto flex gap-[125px] items-center'>
        <Image
          src={product.image?.desktop.replace(".", "")}
          alt='headphones'
          width={540}
          height={560}
        />

        <div className='text-black '>
          <h3 className='tracking-[10px] text-sm uppercase font-normal text-[#D87D4A]'>New Product</h3>
          <h1 className='uppercase font-bold tracking-[2px] pt-6 text-[56px] leading-[58px]'>{product.name}</h1>
          <p className='w-[349px] opacity-75 text-[15px] leading-[25px] pt-6 font-medium'>{product.description}</p>
          <h5 className='font-bold tracking-[1.29px] text-[18px] uppercase mt-8'>${product.price}</h5>

          <div className='flex items-center gap-4 mt-[47px]'>
            <div className='w-30 h-12 bg-[#F1F1F1] flex justify-around items-center font-bold text-lg'>
              <button className='font-bold opacity-50 text-2xl' onClick={() => setCount(count - 1)}>-</button>
                {count}
              <button className='font-bold opacity-50 text-2xl' onClick={() => setCount(count + 1)}>+</button>
            </div>
            <button 
              className='bg-[#D87D4A] text-white w-40 h-12 font-bold uppercase tracking-[1px] text-[13px] hover:bg-[#FBAF85]'
              onClick={() => 
              { 

                dispatch(
                  addToCart({ 
                    id: product.id, 
                    name: product.name, 
                    price: product.price, 
                    itemCount: count, 
                    image: product.image.mobile.replace(".", ""),
                    count: count,
                    quantity: count
                  })
                )
              }
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;