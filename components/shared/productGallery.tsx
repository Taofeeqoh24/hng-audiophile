/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Image from "next/image";

interface Props {
  gallery: {
    first: { desktop: string };
    second: { desktop: string };
    third: { desktop: string };
  };
}

function ProductGallery({ gallery }: Props) {
  return (
    <>
      <div className="mx-auto w-[1110px] mt-40 max-md:w-full max-md:px-6">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Left Column */}
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <Image
              src={gallery.first.desktop.replace(".", "")}
              alt="product image"
              width={445}
              height={280}
              className="gallery-image rounded-lg object-cover"
            />
            <Image
              src={gallery.second.desktop.replace(".", "")}
              alt="product image"
              width={445}
              height={280}
              className="gallery-image rounded-lg object-cover"
            />
          </div>

          {/* Right Large Image */}
          <Image
            src={gallery.third.desktop.replace(".", "")}
            alt="product image"
            width={635}
            height={592}
            className="gallery rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
