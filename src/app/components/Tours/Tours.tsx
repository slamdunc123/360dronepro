//@ts-nocheck

import Link from 'next/link';
import React from 'react';

const toursInfo = [
	{
		img: '/rock-cottage.png',
		testimonial:
			'...lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum voluptate porro quam quasi voluptas nostrum optio accusamus in eius totam tempora illo itaque, maxime quae, a animi nihil, enim impedit.',
		owner: 'Denise',
	},
	{
		img: '/hall-cottage.png',
		testimonial:
			'...lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum voluptate porro quam quasi voluptas nostrum optio accusamus in eius totam tempora illo itaque, maxime quae, a animi nihil, enim impedit.',
		owner: 'Susannah',
	},
	{
		img: '/dale-farm.png',
		testimonial:
			'...lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum voluptate porro quam quasi voluptas nostrum optio accusamus in eius totam tempora illo itaque, maxime quae, a animi nihil, enim impedit.',
		owner: 'Duncan',
	},
	{
		img: '/dale-view.png',
		testimonial:
			'...lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum voluptate porro quam quasi voluptas nostrum optio accusamus in eius totam tempora illo itaque, maxime quae, a animi nihil, enim impedit.',
		owner: 'Christine',
	},
];

const Tours = ({ tours }) => {
	return (
		<main className='flex flex-col w-full'>
			<article className='p-4'>
				<p>
					Virtual Tours are a great way to showcase your property or
					business premises.
				</p>
			</article>
			{tours &&
				tours.map((item, index) => {
					return (
						<div
							className={`p-4 md:flex shadow-md border-slate-200 border m-1 rounded-md ${
								index % 2
									? 'flex-row-reverse bg-slate-50'
									: 'bg-slate-100'
							}`}
							key={item.id}
						>
							<div
								className={`flex flex-col w-full md:w-1/2 ${
									index % 2
										? 'justify-self-end'
										: 'justify-self-start'
								}`}
							>
								<Link href={`/virtual-tours/${item.id}`}>
									<img
										src={toursInfo[index].img}
										className='w-full'
										alt=''
									/>
								</Link>
							</div>
							<div
								className={`flex flex-col w-full md:w-1/2 ${
									index % 2
										? 'justify-self-start'
										: 'justify-self-end'
								}`}
							>
								<Link href={`/virtual-tours/${item.id}`}>
									<div className='flex flex-col items-center justify-center px-2'>
										<div className='self-start mb-2'>
											{item.name}
										</div>
										<div>
											{toursInfo[index].testimonial} -{' '}
											{toursInfo[index].owner}
										</div>
									</div>
								</Link>
							</div>
						</div>
					);
				})}
		</main>
	);
};

export default Tours;
