"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect, useState} from 'react';
import Header from "@/components/header";
import CategoryContainer from "@/components/categoryContainer";
import About from "@/components/shared/about";
import Footer from "@/components/shared/footer";
import CategoryPageHeader from '@/components/shared/categoryPageHeader';
import CategoryItemContainer from '@/components/shared/categoryItemContainer';

function Speakers() {
  const category = "speakers"
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/db")
      .then((res) => res.json())
      .then((response) => {
        setIsLoading(false);
        response.data.forEach((item: any) => {
          if (item.category === category) {
            setData((prev: any[]) => [item, ...prev]);
          }
        });
      });
  }, [category]);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <div className='bg-black h-[336px]'>
        <div className="lg:max-w-[1400px] lg:w-[1110px] lg:mx-auto px-4">
          <Header />
          <hr className="mx-auto mt-9 text-white opacity-20"></hr>
        </div>
        <CategoryPageHeader category={category} />
      </div>

      {data.map((item: any) => {
        return (
          <CategoryItemContainer item={item} key={item.id} />
        )
      })}
      <CategoryContainer />
      <About />
      <Footer />
    </>
  )
}

export default Speakers;