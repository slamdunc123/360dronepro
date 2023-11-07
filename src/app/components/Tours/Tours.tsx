import Image from 'next/image';
import Link from 'next/link';

import { ToursPropsType } from '@/app/types';

import { toursInfo } from './toursInfo';

const Tours = ({ tours }: ToursPropsType) => {
	console.log('slamdunc ~ file: Tours.tsx:42 ~ Tours ~ tours:', tours);
	return (
		<main className='flex flex-col w-full'>
			<section className='p-4 shadow-sm'>
				<h2 className='text-4xl font-bold text-sky-700 my-4'>
					Virtual Tours
				</h2>
				<p className='mb-2'>
					Showcase your property or business premises online using the
					latest virtual tour software.
				</p>
				<p className='mb-2'>
					Enable viewers to navigate and view each location in a 360
					degrees perspective.
				</p>
				<p className='mb-2'>
					Check out some of our virtual tours below and see what our
					clients have to say.
				</p>
			</section>
			<section className='p-4 shadow-sm'>
				<h2 className='text-2xl font-bold text-sky-700 my-4'>
					Contact Us
				</h2>
				<p className='mb-2'>
					360dronepro provide a virtual tour service, where we work
					closely with our clients to meet their individual, virtual
					tour needs.
				</p>
				<p className='mb-2'>
					To discuss your requirements please contact us on -{' '}
					<span className='text-lg text-sky-700'>07968903859</span>.
				</p>
			</section>
			<section className='p-4'>
				{tours &&
					tours.map((item, index) => {
						return (
							<div
								className={`md:flex shadow-md border-slate-200 border m-2 hover:bg-slate-300 hover:text-black ${
									index % 2
										? 'flex-row-reverse bg-slate-100 hover:bg-sky-100'
										: 'bg-slate-200 '
								}`}
								key={item?.id}
							>
								<div
									className={`flex flex-col w-full md:w-1/2 ${
										index % 2
											? 'justify-self-end'
											: 'justify-self-start'
									}`}
								>
									<Link href={`/virtual-tours/${item?.id}`}>
										<Image
											src={`/${toursInfo[index].img}`}
											width='0'
											height='0'
											className='w-full'
											unoptimized
											alt={toursInfo[index].img}
										/>
									</Link>
								</div>
								<div
									className={`flex flex-col w-full md:w-1/2 lg:mt-6 xl:mt-12 ${
										index % 2
											? 'justify-self-start'
											: 'justify-self-end'
									}`}
								>
									<Link href={`/virtual-tours/${item?.id}`}>
										<div className='flex flex-col items-center justify-center p-4'>
											<div className='self-start mb-2'>
												{item?.name}
											</div>
											<p className='italic'>
												{toursInfo[index].testimonial &&
												toursInfo[index].owner
													? `${toursInfo[index].testimonial} - ${toursInfo[index].owner}`
													: null}
											</p>
										</div>
									</Link>
								</div>
							</div>
						);
					})}
			</section>
		</main>
	);
};

export default Tours;
