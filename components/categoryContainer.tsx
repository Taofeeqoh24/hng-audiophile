import React from 'react'
import CategoryCard from './categoryCard'

function CategoryContainer() {
  return (
    <div className="my-10 max-md:w-[689px]">
      <div className="gap-[30px] max-md:gap-2.5 max-md:w-[223px] max-md:h-[165px] px-4 mx-auto w-[1110px] justify-around flex h-[284px] ">
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </div>
    </div>
  )
}

export default CategoryContainer
