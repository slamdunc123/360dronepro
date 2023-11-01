'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMenuOnClick = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};
	return (
		<header className='fixed top-0 left-0 h-16 w-full bg-white shadow-sm'>
			<nav className='container mx-auto h-full px-4 py-2'>
				<div className='flex justify-between items-center h-full'>
					<Image
						src='/360dronepro-logo.svg'
						alt=''
						width='256'
						height='0'
					/>
					{/* <div>360dronepro</div> */}
					<button
						className=' sm:hidden text-2xl text-sky-700'
						onClick={handleMenuOnClick}
					>
						{!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
					</button>
					<div className='justify-between hidden sm:block space-x-4'>
						<Link href='/' className='text-sky-700'>
							Home
						</Link>
						<Link href='/virtual-tours' className='text-sky-700'>
							Virtual Tours
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
