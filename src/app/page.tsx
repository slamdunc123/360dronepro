//@ts-nocheck

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { listTours } from '../graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

const fetchTours = async () => {
	const tours = await API.graphql(graphqlOperation(listTours));
	return tours;
};

export default async function Page() {
	const fetchedTours = await fetchTours();
	const tours = fetchedTours.data.listTours.items;

	return (
		<main className='flex flex-col'>
			Home Page
			<div>
				{tours.map((item) => (
					<div key={item.id}>{item.name}</div>
				))}
			</div>
		</main>
	);
}
