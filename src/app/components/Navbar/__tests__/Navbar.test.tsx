import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';

it('renders the Navbar component with banner element', () => {
	render(<Navbar />);
	const bannerElement = screen.getByRole('banner');
	expect(bannerElement).toBeInTheDocument();
});
describe('tests for navigation links', () => {
	it('renders correct number of links', () => {
		render(<Navbar />);
		const linkElements = screen.getAllByRole('link');
		expect(linkElements).toHaveLength(3);
	});
	it('renders the Navbar component with link element', () => {
		render(<Navbar />);
		const linkElement = screen.getByRole('link', { name: 'Home' });
		expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/')
	});
});

it('renders the Navbar component with button element', () => {
	render(<Navbar />);
	const buttonElement = screen.getByRole('button');
	expect(buttonElement).toBeInTheDocument();
});
