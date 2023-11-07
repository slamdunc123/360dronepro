'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MdOutlineMenu } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';

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
						alt='360dronepro-logo.svg'
						width='0'
						height='0'
            className='w-64'
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
					<div className='sm:flex-grow flex flex-col sm:flex-row mt-10 sm:mt-0'>
						<Link
							href='/'
							className='sm:mr-4 text-sky-700'
							onClick={handleMenuOnClick}
						>
							Home
						</Link>
						<Link
							href='/virtual-tours'
							className='sm:mr-4 text-sky-700'
							onClick={handleMenuOnClick}
						>
							Virtual Tours
						</Link>
						<Link
							href='/aerial-images'
							className='text-sky-700'
							onClick={handleMenuOnClick}
						>
							Aerial Images
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
