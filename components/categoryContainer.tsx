import React from 'react'
import CategoryCard from './categoryCard'

function CategoryContainer() {
  return (
    <div className="mt-20 mb-40 lg:w-[1110px] w-[327px] mx-auto">
      <div className="flex lg:flex-row md:flex-row flex-col gap-15 lg:gap-5 justify-center">
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </div>
    </div>
  )
}

export default CategoryContainer
