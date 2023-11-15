const Modal = ({
	setIsModalOpen,
	activeImage,
	handlePrevOnClick,
	handleNextOnClick,
}: any) => {
	return (
		<div
			className=' z-10'
			aria-labelledby='modal-title'
			role='dialog'
			aria-modal='true'
		>
			<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

			<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
				<div className='flex min-h-full w-full items-center justify-center p-4 text-center '>
					<div className='text-white text-right w-full lg:w-3/4 xl:w-2/3 cursor-pointer relative '>
						<button
							type='button'
							onClick={() =>
								setIsModalOpen(
									(prevIsModalOpen: any) => !prevIsModalOpen
								)
							}
							className=' '
						>
							X
						</button>
						<img
							src={activeImage.url}
							alt=''
							className='w-full cursor-pointer'
						/>
						<div className='absolute top-[50%] left-0 text-white p-2'>
							<button onClick={handlePrevOnClick}>prev</button>
						</div>
						<div className='absolute top-[50%] right-0 text-white p-2'>
							<button onClick={handleNextOnClick}>next</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
