import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

it('renders the Footer component with copyright paragraph', () => {
	render(<Footer />);
	const paragraphElement = screen.getByText(
		/© 2023 Copyright - 360dronepro.co.uk/i
	);
	expect(paragraphElement).toBeInTheDocument();
});

