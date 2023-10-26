//@ts-nocheck

import React from 'react';
import { tours } from '../../config';

const Page = ({ params }: { params: { id: string } }) => {
	const tour = tours.find((item) => item.id === params.id);

	return (
		<div className='h-[85%] w-full xl:w-10/12'>
			<iframe
				width='100%'
				height='100%'
				allow='xr-spatial-tracking; gyroscope; accelerometer'
				src={tour.url}
			></iframe>
		</div>
	);
};

export default Page;

// Return the page without additional layout.
Page.getLayout = (page) => page;
