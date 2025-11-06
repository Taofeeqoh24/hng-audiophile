import React from 'react'
import CategoryCard from './categoryCard'

function CategoryContainer() {
  return (
    <div className="mt-20 mb-40 w-[1110px] mx-auto">
      <div className="flex lg:flex-row flex-col gap-15 ml-10 lg:ml-0 lg:gap-5 justify-center">
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </div>
    </div>
  )
}

export default CategoryContainer
