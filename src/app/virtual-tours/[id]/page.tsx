import { Amplify, API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { GetTourQuery } from '../../../API';
import { getTour } from '../../../graphql/queries';

import awsExports from '@/aws-exports';
Amplify.configure({ ...awsExports, ssr: true });

const fetchTour = async (id: string) => {
	const tour = await API.graphql<GraphQLQuery<GetTourQuery>>({
		query: getTour,
		variables: { id: id },
	});

	return tour;
};

const VirtualTour = async ({ params }: { params: { id: string } }) => {
	const fetchedTour = await fetchTour(params.id);
	const tour = fetchedTour.data?.getTour;

	return (
		<main className='w-full h-full'>
			{tour ? (
				<iframe
					className='w-full h-full'
					src={tour && tour.url}
          allow='xr-spatial-tracking; gyroscope; accelerometer'
				></iframe>
			) : (
				'No tour found'
			)}
		</main>
	);
};

export default VirtualTour;
