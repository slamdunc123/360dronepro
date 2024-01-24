import Surveys from '../components/Inspections/Inspections';

const DroneInspections = () => {
	return (
		<main className='flex flex-col w-full'>
			<section className='p-4 shadow-sm text-sky-700'>
				<h2 className='text-4xl font-bold my-4'>Drone Inspections</h2>
				<p className='mb-2'>Make initial roofing checks.</p>
				<p className='mb-2'>Avoid unnecessary accidents.</p>
				<p className='mb-2'>
					Check out some of our drone inspection media below.
				</p>
			</section>
			<section className='p-4 shadow-sm text-sky-700'>
				<h2 className='text-2xl font-bold my-4'>Contact Us</h2>
				<p className='mb-2'>
					360dronepro provide a drone inspection service, where we
					work closely with our clients to meet their individual,
					drone inspection needs.
				</p>
				<p className='mb-2'>
					To discuss your requirements please contact us on -{' '}
					<span className='text-lg text-sky-700'>07968903859</span>.
				</p>
			</section>
			<section className='p-4 shadow-sm'>
				<Surveys />
			</section>
		</main>
	);
};

export default DroneInspections;
