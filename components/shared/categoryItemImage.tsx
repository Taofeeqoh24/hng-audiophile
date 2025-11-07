import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  name: string;
}

function CategoryItemImage({ src, name }: Props) {
  return (
    <div className="flex justify-center w-full">
      <Image
        src={src}
        alt={name}
        width={540}
        height={560}
        className="rounded-lg w-full max-w-[540px] h-auto object-cover"
      />
    </div>
  );
}

export default CategoryItemImage;
