import React from 'react';
import { Amplify, API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListToursQuery } from '../../API';
import { listTours } from '../../graphql/queries';

import Tours from '../components/Tours/Tours';

import awsExports from '@/aws-exports';
Amplify.configure({ ...awsExports, ssr: true });


const fetchTours = async () => {
	const tours = await API.graphql<GraphQLQuery<ListToursQuery>>({
		query: listTours,
	});
	return tours;
};

const Page = async () => {
	const fetchedTours = await fetchTours();
	const tours = fetchedTours.data?.listTours?.items;
	return <Tours tours={tours} />;
};

export default Page;
