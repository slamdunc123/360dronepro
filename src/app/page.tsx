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
					<div className='flex-1 flex sm:justify-center'>
						<h3>Virtual Tours</h3>
					</div>
					<div className='flex-1 flex sm:justify-center'>
						Aerial Images
					</div>
				</div>
			</section>
		</main>
	);
}
