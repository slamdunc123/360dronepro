import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-sky-700 mt-auto flex justify-between py-1 px-1 sm:px-2'>
			<div className='text-white text-xs lg:text-sm'>
				© 2023 Copyright - 360dronepro.co.uk
			</div>
			<div className='text-white text-xs lg:text-sm flex items-center'>
				<p>07968903859</p>
			</div>
		</footer>
	);
};

export default Footer;
