'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MdOutlineMenu } from 'react-icons/md';
import { MdOutlineClose } from 'react-icons/md';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuOnClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className='sticky left-0 top-0 z-10 w-full'>
      <nav
        className='flex flex-wrap items-center justify-between bg-white p-4 shadow-md '
        role='navigation'
        aria-label='main navigation menu'
      >
        <div className='flex flex-shrink-0 items-center text-sky-700'>
          <Image
            src='/360dronepro-logo.svg'
            alt='360 drone pro company logo'
            width='0'
            height='0'
            className='w-64'
          />
        </div>
        <div className='block lg:hidden'>
          <button
            className='text-2xl text-sky-700 lg:hidden'
            onClick={handleMenuOnClick}
            type='button'
            aria-expanded={isOpen}
            aria-label='main navigation menu button'
          >
            {!isOpen ? <MdOutlineMenu /> : <MdOutlineClose />}
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:w-auto lg:items-center`}
        >
          <div className='mt-10 flex flex-col lg:mt-0 lg:flex-grow lg:flex-row'>
            <Link
              href='/'
              className='text-sky-700 hover:text-sky-300 lg:mr-4'
              onClick={handleMenuOnClick}
            >
              Home
            </Link>
            <Link
              href='/virtual-tours'
              className='text-sky-700 hover:text-sky-300 lg:mr-4'
              onClick={handleMenuOnClick}
            >
              Virtual Tours
            </Link>
            <Link
              href='/aerial-images'
              className='text-sky-700 hover:text-sky-300 lg:mr-4'
              onClick={handleMenuOnClick}
            >
              Aerial Images
            </Link>
            <Link
              href='/drone-inspections'
              className='text-sky-700 hover:text-sky-300'
              onClick={handleMenuOnClick}
            >
              Drone Inspections
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
