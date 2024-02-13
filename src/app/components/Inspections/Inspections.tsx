'use client';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { inspectionsInfo } from './inspectionsInfo';
import Image from 'next/image';
import { AerialType } from '@/app/types';

const Inspections = () => {
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
			setActiveImageIndex(inspectionsInfo.length - 1);
			setActiveImage(inspectionsInfo[inspectionsInfo.length - 1]);
		} else {
			setActiveImageIndex(activeImageIndex - 1);
			setActiveImage(inspectionsInfo[activeImageIndex - 1]);
		}
	};

	const handleNextOnClick = () => {
		if (activeImageIndex === inspectionsInfo.length - 1) {
			setActiveImageIndex(0);
			setActiveImage(inspectionsInfo[0]);
		} else {
			setActiveImageIndex(activeImageIndex + 1);
			setActiveImage(inspectionsInfo[activeImageIndex + 1]);
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
				{inspectionsInfo &&
					inspectionsInfo.map((item, index) => (
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

export default Inspections;
