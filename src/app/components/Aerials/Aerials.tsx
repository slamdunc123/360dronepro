import { aerialsInfo } from './aerialsInfo';

const Aerials = () => {
	return (
		<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
			{aerialsInfo &&
				aerialsInfo.map((item, index) => (
					<div key={index} className='w-full'>
						<img
							src={item.url}
							alt={item.img}
							// width='0'
							// height='0'
							className='w-full'
						/>
					</div>
				))}
		</div>
	);
};

export default Aerials;
