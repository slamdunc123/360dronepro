import Aerials from '../components/Aerials/Aerials';

const AerialImages = () => {
	return (
		<main className='flex flex-col w-full'>
			<section className='p-4 shadow-sm text-sky-700'>
				<h2 className='text-4xl font-bold my-4'>
					Aerial Images
				</h2>
				<p className='mb-2'>
					Capture your property or business premises from a unique
					aerial perspective using drone photography.
				</p>
				<p className='mb-2'>
					Add aerial images to your property portfolio.
				</p>
				<p className='mb-2'>
					Check out some of our aerial images below.
				</p>
			</section>
			<section className='p-4 shadow-sm text-sky-700'>
				<h2 className='text-2xl font-bold my-4'>
					Contact Us
				</h2>
				<p className='mb-2'>
					360dronepro provide an aerial image service, where we work
					closely with our clients to meet their individual, aerial
					image needs.
				</p>
				<p className='mb-2'>
					To discuss your requirements please contact us on -{' '}
					<span className='text-lg text-sky-700'>07968903859</span>.
				</p>
			</section>
			<section className='p-4 shadow-sm'>
				<Aerials />
			</section>
		</main>
	);
};

export default AerialImages;
