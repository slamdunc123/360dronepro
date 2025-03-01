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

const VirtualTours = async () => {
  const fetchedTours = await fetchTours();
  const tours = fetchedTours.data?.listTours?.items;
  return (
    <main className='flex w-full flex-col'>
      <section className='bg-sky-700 p-4 text-white shadow-sm'>
        <h1 className='my-4 text-4xl  font-bold'>Virtual Tours</h1>
        <p className='mb-2'>
          Showcase your property or business premises online using the latest
          virtual tour software.
        </p>
        <p className='mb-2'>
          Enable viewers to navigate and view each location from a 360 degrees
          perspective.
        </p>
        <p className='mb-2'>
          Check out some of our virtual tours below and see what our clients
          have to say.
        </p>
      </section>
      <section className='space-y-4 p-1'>
        <Tours tours={tours} />
      </section>
      <section className='p-4 text-sky-700 shadow-sm'>
        <h2 className='my-4 text-2xl font-bold'>Contact Us</h2>
        <p className='mb-2'>
          360dronepro provide a virtual tour service, where we work closely with
          our clients to meet their individual, virtual tour needs.
        </p>
        <p className='mb-2'>
          To discuss your requirements please contact us on -{' '}
          <span className='text-lg text-sky-700'>07968903859</span>.
        </p>
      </section>
    </main>
  );
};

export default VirtualTours;
