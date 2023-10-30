//@ts-nocheck

import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsExports from '@/aws-exports';
import { listTours } from '../../../graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });
import Tours from '../../components/Tours/Tours';

const fetchTours = async () => {
	const tours = await API.graphql({query: listTours});
	return tours;
};

const Page = async () => {
	const fetchedTours = await fetchTours();
	const tours = fetchedTours.data.listTours.items;
	return <Tours tours={tours}/>;
};

export default Page;
