import Surveys from '../components/Inspections/Inspections';

const DroneInspections = () => {
  return (
    <main className='flex w-full flex-col'>
      <section className='bg-sky-700 p-4 text-white shadow-sm'>
        <h1 className='my-4 text-4xl font-bold'>Drone Inspections</h1>
        <p className='mb-2'>Make initial roofing checks.</p>
        <p className='mb-2'>Avoid unnecessary accidents.</p>
        <p className='mb-2'>
          Check out some of our drone inspection images below.
        </p>
      </section>
      <section className='p-1 shadow-sm'>
        <Surveys />
      </section>
      <section className='p-4 text-sky-700 shadow-sm'>
        <h2 className='my-4 text-2xl font-bold'>Contact Us</h2>
        <p className='mb-2'>
          360dronepro provide a drone inspection service, where we work closely
          with our clients to meet their individual, drone inspection needs.
        </p>
        <p className='mb-2'>
          To discuss your requirements please contact us on -{' '}
          <span className='text-lg text-sky-700'>07968903859</span>.
        </p>
      </section>
    </main>
  );
};

export default DroneInspections;
