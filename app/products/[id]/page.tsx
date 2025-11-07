/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import Products from '@/components/products';
import { useParams } from 'next/navigation';
import Footer from "@/components/shared/footer";
import CategoryContainer from '@/components/categoryContainer';
import ProductFeatures from '@/components/shared/productFeatures';
import ProductGallery from '@/components/shared/productGallery';
import About from '@/components/shared/about';


function ProductDetail() {
  const params = useParams();
  const id = params.id as string;

  const [data, setData] = useState([{ id: "0" }])
  const [product, setProduct] = useState({ 
    id: "0", 
    features: "", 
    includes: [],
    gallery: { 
    first: { desktop: "string" }, 
    second: { desktop: "string" }, 
    third: { desktop: "string" }
  },
  });
  const [isLoading, setLoading] = useState(true);


  useEffect(() => {
    fetch("/api/db")
      .then((res) => res.json())
      .then((response) => {
        setData(response)
        setLoading(false);
        response.data.map((item: any) => {
          if (item.id.toString() === id) {
            setProduct(item)
          }
        });
      });
  }, [id]);

  if (isLoading) {
    return (
      <div>
        <Header />
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <>
      <div className='bg-black h-[97px]'>
        <div className="lg:max-w-[1400px] lg:w-[1110px] lg:mx-auto px-4">
          <Header />
          <hr className="mx-auto mt-9 text-white opacity-20"></hr>
        </div>
      </div>
      <Products product={product} />
      <ProductFeatures features={product.features} includes={product.includes} />
      <ProductGallery gallery={product.gallery} />
      <About />
      <CategoryContainer />
      <Footer />
    </>
  )
}

export default ProductDetail;
