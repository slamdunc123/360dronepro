import Service from "./components/Service/Service";
import { services } from "./services";

const Home = () => {
  return (
    <main className="flex w-full flex-col">
      <section className="bg-sky-700 p-4 text-white shadow-sm">
        <h1 className="my-4 text-4xl font-bold">360dronepro</h1>
        <p className="mb-2">
          At 360dronepro we use 360 camera and drone technology to provide
          virtual tours, aerial images, and drone inspection services for our
          clients.
        </p>
      </section>
      <section className="p-4 text-sky-700 shadow-sm">
        <h2 className="my-4 text-2xl font-bold text-sky-700">Services</h2>
      </section>
      <section className="flex justify-center p-4 text-sky-700 shadow-sm">
        <div className="flex w-full flex-col items-center gap-y-4 sm:gap-x-2 lg:flex-row ">
          {services.map((item) => {
            return <Service item={item} key={item.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
