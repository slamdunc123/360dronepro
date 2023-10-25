import Link from 'next/link';
import React from 'react';

const Tours = () => {
	return (
		<main className='flex flex-col w-screen p-2'>
			<article className='self-start w-full md:w-1/2'>
				<h2>Rock Cottage</h2>
				<img
					src='https://placehold.co/600x400'
					className='w-full'
					alt=''
				/>
			</article>
			<article className='flex flex-col self-end w-full md:w-1/2'>
				<Link href='/tour'>
					<h2>Dale View</h2>
					<img
						src='https://placehold.co/600x400'
						className='w-full'
						alt=''
					/>
				</Link>
			</article>
		</main>
	);
};

export default Tours;
