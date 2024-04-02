import Image from 'next/image';
import Link from 'next/link';

import { ToursPropsType } from '@/app/types';

import { toursInfo } from './toursInfo';

//TODO: add toursInfo data to tours database to ensure one source of data, add fields and include a featured boolean field
const Tours = ({ tours }: ToursPropsType) => {
  return toursInfo.map((item, index) => (
    <Link href={`/virtual-tours/${item.id}`} key={item?.id}>
      <div
        className={`border border-slate-200 bg-slate-100 shadow-md hover:bg-slate-200 md:flex ${
          index % 2 && 'flex-row-reverse'
        }`}
      >
        <div
          className={`flex w-full flex-col md:w-1/2 ${
            index % 2 ? 'justify-self-end' : 'justify-self-start'
          }`}
        >
          <Image
            src={`/${item.img}`}
            alt={item.alt}
            width={960}
            height={480}
            className='cursor-pointer'
            unoptimized
          />
        </div>
        <div
          className={`flex w-full flex-col md:w-1/2 lg:mt-6 xl:mt-12 ${
            index % 2 ? 'justify-self-start' : 'justify-self-end'
          }`}
        >
          <div className='flex flex-col items-center justify-center p-4 text-sky-700'>
            <div className='mb-2 self-start'>{item.name}</div>
            <p className='italic'>
              {item.testimonial && item.owner
                ? `${item.testimonial} - ${item.owner}`
                : null}
            </p>
          </div>
        </div>
      </div>
    </Link>
  ));
};

export default Tours;
