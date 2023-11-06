'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineMenu } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';
import Image from 'next/image';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleMenuOnClick = () => {
		setIsOpen((prevIsOpen) => !prevIsOpen);
	};

	return (
		<header className='sticky top-0 left-0 w-full'>
			<nav className='flex items-center justify-between flex-wrap bg-white shadow-md p-2'>
				<div className='flex items-center flex-shrink-0 text-sky-700'>
					<Image
						src='/360dronepro-logo.svg'
						alt=''
						width={'256'}
						height='0'
					/>
				</div>
				<div className='block sm:hidden'>
					<button
						className='sm:hidden text-2xl text-sky-700'
						onClick={handleMenuOnClick}
					>
						{!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
					</button>
				</div>
				<div
					className={`${
						isOpen ? 'block' : 'hidden'
					} w-full sm:flex sm:items-center sm:w-auto`}
				>
					<div className='sm:flex-grow mt-10 sm:mt-0'>
						<Link
							href='/'
							className='block sm:inline-block sm:mr-4 text-sky-700'
							onClick={handleMenuOnClick}
						>
							Home
						</Link>
						<Link
							href='/virtual-tours'
							className='block sm:inline-block sm:mr-4 text-sky-700'
							onClick={handleMenuOnClick}
						>
							Virtual Tours
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
