//@ts-nocheck

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='bg-gray-200 flex w-full h-12 justify-between items-center'>
			<div className='w-32 p-2'>360dronepro</div>
			<div className='w-96 p-2'>
				<ul className='flex justify-between'>
					<Link href='/'>Home</Link>
					<Link href='/holidaylets'>Holiday Lets</Link>
					<Link href='/rentals'>Rentals</Link>
					<Link href='/sales'>Sales</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
