/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CategoryItemImage from './categoryItemImage';
import CategoryItemText from './categoryItemText';

interface Props {
  item: any;
}

function CategoryItemContainer({ item }: Props) {
  return (
    <div className="lg:mb-40">
      <div
        className={`
          lg:w-[1110px]
          lg:h-[560px]
          mt-8
          mx-auto
          flex
          items-center
          text-center
          lg:text-left
          flex-col
          lg:flex-row
          ${item.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}
          lg:gap-[125px]
        `}
      >
        {/* Image */}
        <div className="flex justify-center w-[327px] h-[352px] md:h-[352px] lg:h-[560px] md:w-[689px] lg:w-[540px]">
          <CategoryItemImage
            src={item.image.desktop.replace('.', '')}
            name={item.name}
          />
        </div>

        {/* Text */}
        <div className=" mt-[-50px] flex justify-center w-full lg:w-[445px]">
          <CategoryItemText
            isNew={item.new}
            name={item.name}
            description={item.description}
            id={item.id}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryItemContainer;
