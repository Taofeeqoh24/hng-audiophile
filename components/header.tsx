"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cart from './cart';
import { useAppSelector } from '@/store/hooks';

function Header() {
  const [showCart, setShowCart] = useState(false);
  const {cart} = useAppSelector((state) => state.cart);

  const handleToggleCart = () => setShowCart(!showCart);
  const handleCloseCart = () => setShowCart(false);
  
  return (
    <>
      <div className='mx-auto lg:flex lg:justify-between max-md:gap-[465px] lg:align-center pt-8 text-white'>
        <div className='max-md:flex max-md:items-center max-md:gap-[42px]'>
          <div className='hamburger'></div>
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
              className=''
            />          
          </Link>
        </div>
        <ul className='lg:flex gap-[34px] text-[13px] uppercase font-bold tracking-[2px] leading-[25px] decoration-0 hidden'>
          <Link href="/" className='hover:text-[#D87D4A]'>Home</Link>
          <Link href="/headphones" className='hover:text-[#D87D4A]' >Headphones</Link>
          <Link href="/speakers" className='hover:text-[#D87D4A]'  >Speaker</Link>
          <Link href="/earphones" className='hover:text-[#D87D4A]'>Earphones</Link>
        </ul>

        <button onClick={handleToggleCart}>
          <div className='flex'>
            <Image
            src="/assets/shared/desktop/icon-cart.svg"
            alt="Cart Icon"
            width={23.33}
            height={20}
            className='font-bold'
            />
            <span className='text-[8px]'>{cart.length}</span>
          </div>
        </button>
        {showCart && <Cart onClose={handleCloseCart} />}
      </div>
    </>
  )
}

export default Header