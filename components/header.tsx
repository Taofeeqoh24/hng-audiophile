"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
import { useAppSelector } from "@/store/hooks";

function Header() {
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  const handleToggleCart = () => setShowCart(!showCart);
  const handleCloseCart = () => setShowCart(false);
  const handleToggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="mx-auto flex justify-between items-center pt-6 text-white relative">
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggleMenu}
            className="flex flex-col justify-between w-6 h-5 lg:hidden focus:outline-none"
          >
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo.svg"
              alt="Audiophile Logo"
              width={143}
              height={25}
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-[34px] text-[13px] uppercase font-bold tracking-[2px] leading-[25px]">
          <Link href="/" className="hover:text-[#D87D4A]">Home</Link>
          <Link href="/headphones" className="hover:text-[#D87D4A]">Headphones</Link>
          <Link href="/speakers" className="hover:text-[#D87D4A]">Speakers</Link>
          <Link href="/earphones" className="hover:text-[#D87D4A]">Earphones</Link>
        </ul>

        {/* Cart Icon */}
        <button onClick={handleToggleCart}>
          <div className="flex items-center">
            <Image
              src="/assets/shared/desktop/icon-cart.svg"
              alt="Cart Icon"
              width={23.33}
              height={20}
            />
            <span className="text-[10px] ml-1">({cart.length})</span>
          </div>
        </button>

        {showCart && <Cart onClose={handleCloseCart} />}

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-[#191919] p-6 flex flex-col gap-6 text-white text-[15px] font-bold uppercase tracking-[1.5px] z-50 lg:hidden">
            <Link href="/" className="hover:text-[#D87D4A]" onClick={handleToggleMenu}>Home</Link>
            <Link href="/headphones" className="hover:text-[#D87D4A]" onClick={handleToggleMenu}>Headphones</Link>
            <Link href="/speakers" className="hover:text-[#D87D4A]" onClick={handleToggleMenu}>Speakers</Link>
            <Link href="/earphones" className="hover:text-[#D87D4A]" onClick={handleToggleMenu}>Earphones</Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
