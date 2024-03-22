import Image from 'next/image';

import Service from './components/Service/Service'
import { services } from './services';

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
					{services.map((item) => {
						return (
							<Service item={item} key={item.id} />
						);
					})}
				</div>
			</section>
		</main>
	);
};

export default Home;
