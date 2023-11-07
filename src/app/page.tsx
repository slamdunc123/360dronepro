import Image from 'next/image';

export default function Page() {
	return (
		<main className='flex flex-col w-full'>
			<section className='p-4 shadow-sm'>
				<h2 className='text-4xl font-bold text-sky-700 my-4'>
					360dronepro
				</h2>
				<p className='mb-2'>
					At 360dronepro we use 360 camera and drone technology to
					provide virtual tour and aerial image services for our
					clients.
				</p>
			</section>
			<section className='p-4 shadow-sm'>
				<h2 className='text-2xl font-bold text-sky-700 my-4'>
					Services
				</h2>
				<div className='flex flex-col sm:flex-row justify-between w-full '>
					<div className='flex-1 flex flex-col items-center'>
						<h3 className='mb-4 text-lg'>Virtual Tours</h3>
						<Image
							src='/360.svg'
							alt=''
							width='0'
							height='0'
							className='w-32'
						/>
						<p>
							Enhance the viewer&apos;s experience with a virtual tour
						</p>
					</div>
					<div className='flex-1 flex flex-col items-center border-2'>
						<h3 className='mb-4 text-lg'>Aerial Images</h3>
						<Image
							src='/drone.svg'
							alt=''
							width='0'
							height='0'
							className='w-32'
						/>
						<p>
							Get a bird&apos;s eye view with aerial images
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
