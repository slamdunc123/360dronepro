'use client';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { aerialsInfo } from './aerialsInfo';
import Image from 'next/image';
import { AerialType } from '@/app/types';

const Aerials = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [activeImage, setActiveImage] = useState<AerialType>({
		imgSmall: '',
		imgLarge: '',
		url: '',
		alt: '',
	});
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	const handleImageOnClick = (item: AerialType, index: number) => {
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
			<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-1'>
				{aerialsInfo &&
					aerialsInfo.map((item, index) => (
						<div key={index} className='w-full shadow-sm'>
							<Image
								src={`/${item.imgSmall}`}
								alt={item.alt}
								width={640}
								height={360}
								className='cursor-pointer'
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
