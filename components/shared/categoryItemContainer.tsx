/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import CategoryItemImage from './categoryItemImage';
import CategoryItemText from './categoryItemText';

interface Props {
  item: any;
}
function CategoryItemContainer({ item }: Props) {
  return (
    <>
      <div className='mb-40'>
        <div
         
          className='w-[1110px] h-[560px] mt-40 mx-auto flex gap-[125px]'
        >
          {item.id % 2 !== 0 ? (
            <CategoryItemImage
            src={item.image.desktop.replace(".", "")}
            name={item.name} />
          ) : null}
          <CategoryItemText
            isNew={item.new}
            name={item.name}
            description={item.description}
            id={item.id}
          />
          {item.id % 2 === 0 ? (
            <CategoryItemImage
              src={item.image.desktop.replace(".", "")}
              name={item.name} />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default CategoryItemContainer