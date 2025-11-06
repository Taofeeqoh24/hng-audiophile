import React from 'react'

interface Props {
  features: string;
  includes: string[];
}

function ProductFeatures({features, includes}: Props) {
  return (
    <>
      <div className='flex'>
        <div className='flex flex-col items-center juustify-between'>
          <h1>Features</h1>
        </div>

        <div className='flex flex-col justify-between'>
          <h1>In the Box</h1>
        </div>
      </div>
    </>
  )
}

export default ProductFeatures;