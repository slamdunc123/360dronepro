import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Modal = ({
	setIsModalOpen,
	activeImage,
	handlePrevOnClick,
	handleNextOnClick,
}: any) => {
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
					<div className='text-right w-full lg:w-3/4 xl:w-2/3 relative'>
						<button
							type='button'
							onClick={() =>
								setIsModalOpen(
									(prevIsModalOpen: any) => !prevIsModalOpen
								)
							}
							className=' '
						>
							<XMarkIcon className='h-8 w-8 text-black' />
						</button>
						<Image
							src={activeImage.img}
							alt={activeImage.img}
							width='0'
							height='0'
							className='w-full'
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
