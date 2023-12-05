//@ts-nocheck
'use client';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { aerialsInfo } from './aerialsInfo';
import Image from 'next/image';

const Aerials = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeImage, setActiveImage] = useState('');
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	const handleImageOnClick = (item: any, index: any) => {
		setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
		setActiveImage(item);
		setActiveImageIndex(index);
	};

	const handlePrevOnClick = () => {
		if (activeImageIndex === 0) {
			setActiveImageIndex(aerialsInfo.length - 1);
			setActiveImage(aerialsInfo[aerialsInfo.length - 1]);
		} else {
			setActiveImageIndex(activeImageIndex - 1);
			setActiveImage(aerialsInfo[activeImageIndex - 1]);
		}
	};

	const handleNextOnClick = () => {
		if (activeImageIndex === aerialsInfo.length - 1) {
			setActiveImageIndex(0);
			setActiveImage(aerialsInfo[0]);
		} else {
			setActiveImageIndex(activeImageIndex + 1);
			setActiveImage(aerialsInfo[activeImageIndex + 1]);
		}
	};

	return (
		<>
			{isModalOpen && (
				<Modal
					setIsModalOpen={setIsModalOpen}
					activeImage={activeImage}
					handlePrevOnClick={handlePrevOnClick}
					handleNextOnClick={handleNextOnClick}
				/>
			)}
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				{aerialsInfo &&
					aerialsInfo.map((item, index) => (
						<div key={index} className='w-full shadow-sm'>
							<Image
								src={`/${item.img}`}
								alt={item.img}
								width='0'
								height='0'
								className='w-full cursor-pointer'
								onClick={() => handleImageOnClick(item, index)}
								unoptimized
							/>
						</div>
					))}
			</div>
		</>
	);
};

export default Aerials;
