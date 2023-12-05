import Image from 'next/image';
import Link from 'next/link';

import { ToursPropsType } from '@/app/types';

import { toursInfo } from './toursInfo';

const Tours = ({ tours }: ToursPropsType) => {
	console.log('slamdunc ~ file: Tours.tsx:9 ~ Tours ~ tours:', tours);
	return toursInfo.map((item, index) => (
		<div
			className={`md:flex shadow-md border-slate-200 border hover:bg-slate-300 hover:text-black ${
				index % 2
					? 'flex-row-reverse bg-slate-100 hover:bg-sky-100'
					: 'bg-slate-200 '
			}`}
			key={item?.id}
		>
			<div
				className={`flex flex-col w-full md:w-1/2 ${
					index % 2 ? 'justify-self-end' : 'justify-self-start'
				}`}
			>
				<Link href={`/virtual-tours/${item.id}`}>
					<Image
						src={`/${item.img}`}
						width='0'
						height='0'
						className='w-full'
						unoptimized
						alt={item.img}
					/>
				</Link>
			</div>
			<div
				className={`flex flex-col w-full md:w-1/2 lg:mt-6 xl:mt-12 ${
					index % 2 ? 'justify-self-start' : 'justify-self-end'
				}`}
			>
				<Link href={`/virtual-tours/${item?.id}`}>
					<div className='flex flex-col items-center justify-center p-4'>
						<div className='self-start mb-2'>{item.name}</div>
						<p className='italic'>
							{item.testimonial && item.owner
								? `${item.testimonial} - ${item.owner}`
								: null}
						</p>
					</div>
				</Link>
			</div>
		</div>
	));
};

export default Tours;
