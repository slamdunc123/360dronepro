import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

it('should render h1 element', () => {
	render(<Home />);

	const headingEl = screen.getByRole('heading', { name: '360dronepro' });
	expect(headingEl).toBeInTheDocument();
});

