import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { AerialType } from '@/app/types';

type ModalPropsType = {
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	activeImage: AerialType;
	handlePrevOnClick: () => void;
	handleNextOnClick: () => void;
};

const Modal = ({
	setIsModalOpen,
	activeImage,
	handlePrevOnClick,
	handleNextOnClick,
}: ModalPropsType) => {
	return (
		<div
			className='z-10'
			aria-labelledby='modal-title'
			role='dialog'
			aria-modal='true'
		>
			<div className='fixed inset-0 bg-white bg-opacity-80 transition-opacity shadow-lg'></div>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full w-full items-center justify-center p-4 text-center'>
					<div className='text-right w-full md:w-3/4 xl:w-2/3 relative'>
						<button
							type='button'
							onClick={() => setIsModalOpen(false)}
							className=' '
						>
							<XMarkIcon className='h-6 w-6 text-black' />
						</button>
						<Image
							src={activeImage.imgLarge}
							alt={activeImage.imgLarge}
							width={1280}
							height={720}
							unoptimized
						/>
						<div className='absolute top-[50%] left-0 p-2'>
							<button onClick={handlePrevOnClick}>
								<ChevronLeftIcon className='h-8 w-8 text-white' />
							</button>
						</div>
						<div className='absolute top-[50%] right-0 p-2'>
							<button onClick={handleNextOnClick}>
								<ChevronRightIcon className='h-8 w-8 text-white' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
