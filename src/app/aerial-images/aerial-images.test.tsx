import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AerialImages from './page';

describe('Renders', () => {
	it('should render h1 element', () => {
		render(<AerialImages />);

		const h1Element = screen.getByRole('heading', {
			name: /aerial images/i,
		});

		expect(h1Element).toBeInTheDocument();
	});

	it('should render h2 element', () => {
		render(<AerialImages />);

		const h2Element = screen.getByRole('heading', { name: /contact us/i });

		expect(h2Element).toBeInTheDocument();
	});

	it('should render paragraph text', () => {
		render(<AerialImages />);

		const pElement = screen.getByText(
			/check out some of our aerial images below./i
		);

		expect(pElement).toBeInTheDocument();
	});

	it('should render contact telephone number', () => {
		render(<AerialImages />);

		const spanElement = screen.getByText(
			/07968903859/i
		);

		expect(spanElement).toBeInTheDocument();
	});
});
