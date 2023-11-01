'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuOnClick = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	return (
		<header className='fixed top-0 left-0 h-16 w-full bg-sky-700 shadow-md'>
			<nav className='container mx-auto h-full px-4 py-2'>
				<div className='flex justify-between items-center h-full'>
					<div>360dronepro</div>
					<button
						className=' sm:hidden text-2xl  text-white'
						onClick={handleMenuOnClick}
					>
						{!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
					</button>
					<div className='justify-between hidden sm:block space-x-4'>
						<Link href='/' className='text-white'>
							Home
						</Link>
						<Link href='/virtual-tours' className='text-white'>
							Virtual Tours
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
