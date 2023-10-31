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
		<nav className='bg-gray-200 flex w-full h-16 justify-between items-center'>
			<div className='p-2'>360dronepro</div>
			<button className='p-2 sm:hidden' onClick={handleMenuOnClick}>
				{!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
			</button>
			<div className='p-2 hidden sm:block mr-5'>
				<ul className='flex justify-between'>
					<Link href='/'>Home</Link>
					<Link href='/virtual-tours' className='ml-5'>
						Virtual Tours
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
