import React from 'react';

const Tour = () => {
	return (
		<>
			<h1>Tour</h1>
			<iframe
				width='100%'
				height='100%'
				// frameBorder='0'
				allow='xr-spatial-tracking; gyroscope; accelerometer'
				scrolling='no'
				src='https://kuula.co/share/collection/7JB7p?logo=-1&info=0&fs=1&vr=0&gyro=0&initload=0&thumbs=1'
			></iframe>
		</>
	);
};

export default Tour;
