import Image from 'next/image';
import React from 'react';
import { MdPhoneAndroid } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='bg-sky-700 mt-auto px-4 pt-4'>
			<Image
				src='/360dronepro-logo-white.svg'
				alt=''
				width='0'
				height='0'
        className='w-32 sm:w-64'
			/>
			<div className='w-full text-white text-sm md:text-base font-semibold flex items-center justify-end'>
				<MdPhoneAndroid />
				<p> - 07968903859</p>
			</div>
			<div className='pb-2 pt-4 text-center text-white text-sm md:text-base'>
				© 2023 Copyright - 360dronepro.co.uk
			</div>
		</footer>
	);
};

export default Footer;
