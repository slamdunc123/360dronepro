//@ts-nocheck

import Link from 'next/link';
import React from 'react';
import { tours } from '../../config';
console.log('slamdunc ~ file: Tours.tsx:6 ~ tours:', tours);

const Tours = () => {
	return (
		<main className='flex flex-col w-full p-2'>
			{tours.map((item, index) => {
				return (
					<article
						key={item.id}
						className={`flex flex-col w-full md:w-1/2 ${
							index % 2 ? 'self-end' : 'sef-start'
						}`}
					>
						<Link href={`/tour/${item.id}`}>
							<h2>{item.name}</h2>
							<img
								src='https://placehold.co/600x400'
								className='w-full'
								alt=''
							/>
						</Link>
					</article>
				);
			})}
		</main>
	);
};

export default Tours;
