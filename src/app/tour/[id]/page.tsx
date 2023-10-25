//@ts-nocheck

import React from 'react';
import { tours } from '../../config';

const Page = ({ params }: { params: { id: string } }) => {
	const tour = tours.find((item) => item.id === params.id);

	return (
		<div className='h-[calc(100%-48px)]'>
			<iframe
				width='100%'
				height='100%'
				// frameBorder='0'
				allow='xr-spatial-tracking; gyroscope; accelerometer'
				scrolling='no'
				src={tour.url}
			></iframe>
		</div>
	);
};

export default Page;

// Return the page without additional layout.
Page.getLayout = (page) => page;
