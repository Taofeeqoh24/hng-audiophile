import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  category: string
}

function CategoryCard({ category }: Props) {
  return (
    <>
      <div className="category w-[327px] bg-[#f1f1f1] flex flex-col justify-center items-center pb-10">
        <Image
          src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
          alt={`${category} category`}
          width={123}
          height={180}
          className="category-image relative -top-10"
        />

        <h4 className="font-bold uppercase max-md:text-[15px] lg:text-[18px] tracking-[1.28px] max-md:tracking-[1.07px] -mt-10">{category}</h4>

        <div className='flex justify-between mt-2 items-center gap-2 w-[57.32px] h-[18px]'>
          <Link
            href={`/${category}`}
            className="text-[#000000] hover:text-[#D87D4A] mt-2 text-[13px] font-bold tracking-[1px] opacity-50 leading-[100%] "
          >
            SHOP
          </Link>

          <Image
            src={"/assets/shared/desktop/icon-arrow-right.svg"}
            alt="arrow icon"
            width={8}
            height={10}
            className='text-[#D87D4A] pt-2'
          >

          </Image>
        </div>

      </div>
    </>
  )
}

export default CategoryCard
