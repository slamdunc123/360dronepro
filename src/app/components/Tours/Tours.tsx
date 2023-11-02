//@ts-nocheck

import Link from 'next/link';
import React from 'react';

const Tours = ({ tours }) => {
	return (
		<main className='flex flex-col w-full'>
			<article className='container mx-auto px-4 py-2'>
				<p>
					Virtual Tours are a great way to enhance a property&apos;s
					appeal
				</p>
			</article>
			{tours &&
				tours.map((item, index) => {
					return (
						<div
							className={`container mx-auto my-2 px-4 py-2 md:flex ${
								index % 2 && 'flex-row-reverse'
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
										src='https://placehold.co/600x400'
										className='w-full'
										alt=''
									/>
								</Link>
							</div>
							<div
								className={`flex flex-col w-full md:w-1/2  ${
									index % 2
										? 'justify-self-start'
										: 'justify-self-end'
								}`}
							>
								<Link href={`/virtual-tours/${item.id}`}>
									<h2>{item.name}</h2>
								</Link>
							</div>
						</div>
					);
				})}
		</main>
	);
};

export default Tours;
