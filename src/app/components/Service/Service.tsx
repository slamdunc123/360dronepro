import React from "react";
import Link from "next/link";
import Image from "next/image";

type serviceTypeProps = {
  item: {
    id: number;
    url: string;
    heading: string;
    subHeading: string;
    bullets: string[];
    image: {
      path: string;
      alt: string;
      width: number;
      height: number;
    };
  };
};

const Service = ({ item }: serviceTypeProps) => {
  return (
    <div className="relative flex h-full w-full flex-1 justify-center">
      <div
        className="z-2 absolute left-0 top-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${item.image.path})` }}
      ></div>
      <Link
        href={item.url}
        className="z-1 relative flex h-full w-full cursor-pointer flex-col items-center rounded-xl border-2 px-2 py-4 shadow-xl hover:bg-slate-300"
      >
        <h3 className="mb-4 w-full rounded-lg bg-sky-700 p-2 text-center text-xl font-bold text-white">
          {item.heading}
        </h3>
        <div className="flex h-32 w-32 flex-col items-center justify-center">
          <Image
            src={item.image.path}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
          />
        </div>
        <div className="h-64 w-full justify-start rounded-lg border-2 border-sky-700 p-4 font-bold text-sky-700 shadow">
          <p className="mb-4">{item.subHeading}</p>
          {item.bullets.map((item: any, index: number) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </Link>
    </div>
  );
};

export default Service;
