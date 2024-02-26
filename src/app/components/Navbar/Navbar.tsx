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
			<nav
				className='flex items-center justify-between flex-wrap bg-white shadow-md p-2'
				role='navigation'
				aria-label='main navigation menu'
			>
				<div className='flex items-center flex-shrink-0 text-sky-700'>
					<Image
						src='/360dronepro-logo.svg'
						alt='360 drone pro company logo'
						width='0'
						height='0'
						className='w-64'
					/>
				</div>
				<div className='block lg:hidden'>
					<button
						className='lg:hidden text-2xl text-sky-700'
						onClick={handleMenuOnClick}
						type='button'
						aria-expanded={isOpen}
						aria-label='main navigation menu button'
					>
						{!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
					</button>
				</div>
				<div
					className={`${
						isOpen ? 'block' : 'hidden'
					} w-full lg:flex lg:items-center lg:w-auto`}
				>
					<div className='lg:flex-grow flex flex-col lg:flex-row mt-10 lg:mt-0'>
						<Link
							href='/'
							className='lg:mr-4 text-sky-700 hover:text-sky-300'
							onClick={handleMenuOnClick}
						>
							Home
						</Link>
						<Link
							href='/virtual-tours'
							className='lg:mr-4 text-sky-700 hover:text-sky-300'
							onClick={handleMenuOnClick}
						>
							Virtual Tours
						</Link>
						<Link
							href='/aerial-images'
							className='lg:mr-4 text-sky-700 hover:text-sky-300'
							onClick={handleMenuOnClick}
						>
							Aerial Images
						</Link>
						<Link
							href='/drone-inspections'
							className='text-sky-700 hover:text-sky-300'
							onClick={handleMenuOnClick}
						>
							Drone Inspections
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
