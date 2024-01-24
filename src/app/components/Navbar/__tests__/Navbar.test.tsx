import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar', () => {
	it('should render the banner element', () => {
		render(<Navbar />);
		const bannerElement = screen.getByRole('banner');
		expect(bannerElement).toBeInTheDocument();
	});
	it('should render the image element', () => {
		render(<Navbar />);
		const imageElement = screen.getByRole('img', {name: '360dronepro-logo.svg'});
		expect(imageElement).toBeInTheDocument();
	});

	it('should render correct number of links', () => {
		render(<Navbar />);
		const linkElements = screen.getAllByRole('link');
		expect(linkElements).toHaveLength(3);
	});

	it('should render link element with correct route path', () => {
		render(<Navbar />);
		const linkElement = screen.getByRole('link', { name: 'Home' });
		expect(linkElement).toBeInTheDocument();
		expect(linkElement).toHaveAttribute('href', '/');
	});

	it('should render button element', () => {
		render(<Navbar />);
		const buttonElement = screen.getByRole('button');
		expect(buttonElement).toBeInTheDocument();
	});
});
