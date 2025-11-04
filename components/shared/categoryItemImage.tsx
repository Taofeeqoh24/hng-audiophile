import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  name: string;
}

function CategoryItemImage({ src, name}: Props) {
  
  return (
    <>
      <Image 
        src={src} 
        alt={name}
        width={540}
        height={560}
      />
    </>
  )
}

export default CategoryItemImage;