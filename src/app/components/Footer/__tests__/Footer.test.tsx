import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
	it('should render copyright paragraph', () => {
		render(<Footer />);
		const paragraphElement = screen.getByText(
			/© 2023 Copyright - 360dronepro.co.uk/i
		);
		expect(paragraphElement).toBeInTheDocument();
	});
	it('should render mobile number paragraph', () => {
		render(<Footer />);
		const paragraphElement = screen.getByText('07968903859');
		expect(paragraphElement).toBeInTheDocument();
	});
});
