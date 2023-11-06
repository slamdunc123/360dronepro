//@ts-nocheck

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
Amplify.configure({ ...awsExports, ssr: true });

import { getTour } from '../../../graphql/queries';

const fetchTour = async (id) => {
	const tour = await API.graphql({
		query: getTour,
		variables: { id: id },
	});

	return tour;
};

const Page = async ({ params }: { params: { id: string } }) => {
	const fetchedTour = await fetchTour(params.id);
	const tour = fetchedTour.data.getTour;

	return (
		<main className='w-full'>
			{tour ? (
				<iframe
					className='w-full h-screen'
					allow='xr-spatial-tracking; gyroscope; accelerometer'
					src={tour && tour.url}
				></iframe>
			) : (
				'No tour found'
			)}
		</main>
	);
};

export default Page;
