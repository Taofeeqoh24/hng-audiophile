/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";

interface Props {
  product: any;
}

function Products({ product }: Props) {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="
          w-[1110px] h-[560px] mt-40 mx-auto 
          flex lg:gap-[125px] mb-80 lg:mb-0 items-center
          max-md:w-full max-md:px-6 max-md:flex-col max-md:gap-10 max-md:mt-20 max-md:text-center
        "
      >
        <Image
          src={product.image?.desktop.replace(".", "")}
          alt="headphones"
          width={540}
          height={560}
          className="max-md:w-[90%] max-md:h-auto"
        />

        <div className="text-black">
          <h3 className="tracking-[10px] text-sm uppercase font-normal text-[#D87D4A]">
            New Product
          </h3>
          <h1 className="uppercase font-bold tracking-[2px] pt-6 text-[56px] leading-[58px] max-md:text-[32px] max-md:leading-9">
            {product.name}
          </h1>
          <p className="w-[349px] opacity-75 text-[15px] leading-[25px] pt-6 font-medium lg:mx-0 mx-auto max-md:w-[90%]">
            {product.description}
          </p>
          <h5 className="font-bold tracking-[1.29px] text-[18px] uppercase mt-8">
            ${product.price}
          </h5>

          <div className="flex items-center gap-4 mt-[47px] max-md:justify-center">
            <div className="w-30 h-12 bg-[#F1F1F1] flex justify-around items-center font-bold text-lg">
              <button
                className="font-bold opacity-50 text-2xl"
                onClick={() => setCount(Math.max(count - 1, 0))}
              >
                -
              </button>
              {count}
              <button
                className="font-bold opacity-50 text-2xl"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>

            <button
              className="bg-[#D87D4A] text-white w-40 h-12 font-bold uppercase tracking-[1px] text-[13px] hover:bg-[#FBAF85]"
              onClick={() => {
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    itemCount: count,
                    image: product.image.mobile.replace(".", ""),
                    count: count,
                    quantity: count,
                  })
                );
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
