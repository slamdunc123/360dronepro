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
		<div className='flex-1 flex justify-center w-full h-full relative'>
			<div
				className='z-2 opacity-10 absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${item.image.path})` }}
			></div>
			<Link
				href={'/virtual-tours'}
				className='flex flex-col items-center border-2 w-full h-full py-4 px-2 shadow-xl rounded-xl hover:bg-slate-300 cursor-pointer relative z-1'
			>
				<h3 className='mb-4 p-2 text-xl rounded-lg font-bold bg-sky-700 text-white w-11/12 text-center'>
					{item.heading}
				</h3>
				<div className='w-32 h-32 flex flex-col items-center justify-center'>
					<Image
						src={item.image.path}
						alt={item.image.alt}
						width={item.image.width}
						height={item.image.height}
					/>
				</div>
				<div className='justify-start w-11/12 h-60   bg-sky-700 text-white  font-bold rounded-lg p-4 shadow'>
					<p className='mb-4'>{item.subHeading}</p>
					{item.bullets.map((item: any, index: number) => {
						return <p key={index}>{item}</p>;
					})}
				</div>
			</Link>
		</div>
	);
};

export default Service;
