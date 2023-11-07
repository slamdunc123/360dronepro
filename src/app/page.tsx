import Image from 'next/image';
import Link from 'next/link';

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
				<div className='flex flex-col sm:flex-row justify-between w-full space-y-8 sm:space-y-0'>
					<div className='flex-1 flex justify-center'>
						<Link
							href='/virtual-tours'
							className='flex flex-col items-center border-1 w-11/12 py-4 px-2 shadow-md hover:bg-slate-300 cursor-pointer'
						>
							<h3 className='mb-4 text-lg'>Virtual Tours</h3>
							<Image
								src='/360.svg'
								alt='360.svg'
								width='0'
								height='0'
								className='w-32'
							/>
							<p>
								Enhance the viewer&apos;s experience with a
								virtual tour
							</p>
						</Link>
					</div>
					<div className='flex-1 flex justify-center'>
						<Link
							href='/aerial-images'
							className='flex flex-col items-center border-1 w-11/12 py-4 px-2 shadow-md hover:bg-slate-300 cursor-pointer'
						>
							<h3 className='mb-4 text-lg'>Aerial Images</h3>
							<Image
								src='/drone.svg'
								alt='drone.svg'
								width='0'
								height='0'
								className='w-32'
							/>
							<p>Get a bird&apos;s eye view with aerial images</p>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
