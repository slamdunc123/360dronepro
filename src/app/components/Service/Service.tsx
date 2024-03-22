import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type serviceTypeProps = {
	item: {
		id: number;
		heading: string;
		subHeading: string;
		bullets: string[];
		image: {
			path: string;
			alt: string;
			width: number;
			height: number;
		};
	};
};

const Service = ({ item }: serviceTypeProps) => {
	return (
		<div className='flex-1 flex justify-center w-full h-96'>
			<Link
				href={'/virtual-tours'}
				className='flex flex-col items-center border-1 w-full py-4 px-2 shadow-md hover:bg-slate-300 cursor-pointer'
			>
				<h3 className='mb-4 text-lg'>{item.heading}</h3>
				<div className='w-32 h-32 flex flex-col items-center justify-center'>
					<Image
						src={item.image.path}
						alt={item.image.alt}
						width={item.image.width}
						height={item.image.height}
					/>
				</div>
				<div className='justify-start w-11/12'>
					<p>{item.subHeading}</p>
					{item.bullets.map((item: any, index: number) => {
						return <p key={index}>{item}</p>;
					})}
				</div>
			</Link>
		</div>
	);
};

export default Service;
