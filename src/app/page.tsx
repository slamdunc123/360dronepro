import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
	return (
		<main className='flex flex-col w-full'>
			<section className='p-4 shadow-sm text-sky-700'>
				<h1 className='text-4xl font-bold my-4'>360dronepro</h1>
				<p className='mb-2'>
					At 360dronepro we use 360 camera and drone technology to
					provide virtual tours, aerial images, and drone inspection
					services for our clients.
				</p>
			</section>
			<section className='p-4 shadow-sm text-sky-700'>
				<h2 className='text-2xl font-bold my-4 text-sky-700'>
					Services
				</h2>
			</section>
			<section className='p-4 shadow-sm text-sky-700 flex justify-center'>
				<div className='flex flex-col md:flex-row w-full items-center gap-y-4 sm:gap-x-2 '>
					<div className='flex-1 flex justify-center w-full h-96'>
						<Link
							href='/virtual-tours'
							className='flex flex-col items-center border-1 w-full py-4 px-2 shadow-md hover:bg-slate-300 cursor-pointer'
						>
							<h3 className='mb-4 text-lg'>Virtual Tours</h3>
							<div className='w-32 h-32 flex flex-col items-center justify-center'>
								<Image
									src='/360.svg'
									alt='virtual tours logo'
									width='128'
									height='128'
								/>
							</div>
							<div className='justify-start w-11/12'>
								<p>
									Enhance the viewer&apos;s experience with a
									virtual tour
								</p>
								<p>. Virtual walk through</p>
								<p>. User interaction</p>
								<p>. Increase engagement</p>
								<p>. Stand out from the crowd</p>
								<p>. Reach a wider audience</p>
							</div>
						</Link>
					</div>
					<div className='flex-1 flex justify-center w-full h-96'>
						<Link
							href='/aerial-images'
							className='flex flex-col items-center border-1 w-full py-4 px-2 shadow-md hover:bg-slate-300 cursor-pointer'
						>
							<h3 className='mb-4 text-lg'>Aerial Images</h3>
							<div className='w-32 h-32 flex flex-col items-center justify-center'>
								<Image
									src='/drone.svg'
									alt='aerial images logo'
									width='128'
									height='128'
								/>
							</div>
							<div className='justify-start w-11/12'>
								<p>
									Get a bird&apos;s eye view with aerial
									images
								</p>
								<p>. Bird’s eye views</p>
								<p>. Overhead perspective</p>
								<p>. Capture scale</p>
								<p>. Showcase full exterior</p>
								<p>. Boost portfolio</p>
							</div>
						</Link>
					</div>
					<div className='flex-1 flex justify-center w-full h-96'>
						<Link
							href='/drone-inspections'
							className='flex flex-col items-center border-1 w-full py-4 px-2 shadow-md hover:bg-slate-300 cursor-pointer'
						>
							<h3 className='mb-4 text-lg'>Drone Inspections</h3>
							<div className='w-32 h-32 flex flex-col items-center justify-center'>
								<Image
									src='/magnifier.svg'
									alt='drone inspections logo'
									width='96'
									height='96'
								/>
							</div>
							<div className='justify-start w-11/12'>
								<p>
									Check for any roofing issues with a drone
									inspection
								</p>
								<p>. Blocked gutters</p>
								<p>. Mortar decay</p>
								<p>. Cracked tiles</p>
								<p>. Loose flashing</p>
								<p>. Water ingress</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
