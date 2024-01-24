import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

it('should render Home page', () => {
	render(<Home />);

	const headingEl = screen.getByRole('heading', { name: '360dronepro' });
	expect(headingEl).toBeInTheDocument();
});

it('should link to correct page', async () => {
	render(<Home />);

	const anchorElement = screen.getByRole('link', {
		name: "Aerial Images drone.svg Get a bird's eye view with aerial images",
	});

	expect(anchorElement).toBeInTheDocument();
	expect(anchorElement).toHaveAttribute('href', '/aerial-images');
});
