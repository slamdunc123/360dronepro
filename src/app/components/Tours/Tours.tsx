//@ts-nocheck

import Image from 'next/image';
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
					business premises online.
				</p>
				<p>
					They allow the viewer to navigate through a property and
					view each location with a 360 degrees perspective.
				</p>
				<p>
					360dronepro provide a virtual tour service, where we work
					closely with our clients to meet their virtual tour needs.
				</p>
				<p>To discuss your requirements please contact us on - 07968903859.</p>
			</article>
			{tours &&
				tours.map((item, index) => {
					return (
						<div
							className={`p-2 md:flex shadow-md border-slate-200 border m-2 hover:bg-slate-300 hover:text-black ${
								index % 2
									? 'flex-row-reverse bg-slate-100 hover:bg-sky-100'
									: 'bg-slate-200 '
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
									<Image
										src={toursInfo[index].img}
                    width='0'
                    height='0'
										className='w-full'
                    unoptimized
										alt={toursInfo[index].name}
									/>
								
              </Link>
							</div>
							<div
								className={`flex flex-col w-full md:w-1/2 lg:mt-6 xl:mt-12 ${
									index % 2
										? 'justify-self-start'
										: 'justify-self-end'
								}`}
							>
								<Link href={`/virtual-tours/${item.id}`}>
									<div className='flex flex-col items-center justify-center p-4'>
										<div className='self-start mb-2'>
											{item.name}
										</div>
										<p className='italic'>
											{`${toursInfo[index].testimonial} - ${toursInfo[index].owner}`}
										</p>
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
