import React from 'react'

interface Interface {
  quantity: number;
  item: string;
}
interface Props {
  features: string;
  includes: Interface[];
}

function ProductFeatures({ features, includes }: Props) {
  return (
    <>
      <div className='lg:mt-40 md:mt-150 mx-auto lg:w-[1110px] md:w-[689px]'>
        <div className='flex flex-col lg:flex-row gap-[120px] lg:gap-[125px]'>
          <div className='flex gap-8 flex-col text-center lg:text-left lg:w-[635px]'>
            <h1 className='font-bold uppercase text-[15px]'>Features</h1>
            <h3 className='lg:text-[15px] text-sm px-2 lg:px-0  opacity-50'>{features}</h3>
          </div>

          <div className='flex lg:flex-col lg:gap-8 mx-auto lg:mx-0 gap-30'>
            <h1 className='font-bold uppercase lg:text-[15px]' >In the Box</h1>
            <div className='flex flex-col gap-2'>
              {includes.map((item) => {
                return (
                  <h3 key={item.item} className='text-[15px] opacity-50'>
                    <span className='text-[#d87d4a] mr-2'>{item.quantity}x</span> {item.item}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductFeatures;