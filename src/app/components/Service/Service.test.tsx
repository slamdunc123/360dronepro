import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Service from './Service';

const mockItem = {
  item: {
    id: 1,
    heading: 'Virtual Tours',
    url: '/virtual-tours',
    image: {
      path: '/360.svg',
      alt: 'virtual tours logo',
      width: 128,
      height: 128,
    },
    subHeading: 'Enhance viewer experience with a virtual tour',
    bullets: [
      '. 360 perspective',
      '. Virtual walk through',
      '. User interaction',
      '. Increase engagement',
      '. Reach a wider audience',
    ],
  },
};

it('should render correct h3 element', () => {
  render(<Service item={mockItem.item} />);
  const headingEl = screen.getByRole('heading', {
    level: 3,
    name: mockItem.item.heading,
  });
  expect(headingEl).toBeInTheDocument();
});

it('should render correct h4 element', () => {
  render(<Service item={mockItem.item} />);
  const headingEl = screen.getByText(mockItem.item.subHeading);
  expect(headingEl).toBeInTheDocument();
});

it('should render correct number of li elements and text', () => {
  render(<Service item={mockItem.item} />);
  const liElements = screen.getAllByRole('listitem');
  expect(liElements).toHaveLength(5);
  expect(liElements[0]).toHaveTextContent('. 360 perspective');
});

it('should render correct image element', () => {
  render(<Service item={mockItem.item} />);
  const imageElement = screen.getByRole('img', {
    name: mockItem.item.image.alt,
  });
  expect(imageElement).toBeInTheDocument();
});

it('should render correct link element', () => {
  render(<Service item={mockItem.item} />);
  const linkElement = screen.getByRole('link', {
    name: `${mockItem.item.heading} page`,
  });
  expect(linkElement).toHaveAttribute('href', mockItem.item.url);
});
