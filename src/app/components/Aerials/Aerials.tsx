import { aerialsInfo } from './aerialsInfo';

const Aerials = () => {
	return (
		<div className='flex flex-col md:flex-row w-full justify-center md:space-x-2 space-y-2 md:space-y-0'>
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
