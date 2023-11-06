import Image from 'next/image';
import React from 'react';
import { MdPhoneAndroid } from 'react-icons/md';

const Footer = () => {
	return (
		<footer className='bg-sky-700 mt-auto px-4 pt-4'>
			<Image
				src='/360dronepro-logo-white.svg'
				alt=''
				width={'256'}
				height='0'
			/>
			<div className='w-full text-white font-semibold flex items-center justify-end'>
				<MdPhoneAndroid />
				<p> - 07968903859</p>
			</div>
			<div className='pb-2 pt-4 text-center text-white'>
				© 2023 Copyright - 360dronepro.co.uk
			</div>
		</footer>
	);
};

export default Footer;
