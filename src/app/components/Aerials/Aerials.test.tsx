import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Aerials from './Aerials';

describe('Aerials', () => {
	describe('Renders', () => {
		it('should display correct number of images', () => {
			render(<Aerials />);

			const imgElements = screen.getAllByRole('img');

			expect(imgElements).toHaveLength(9);
		});

		it('should not display modal', () => {
			render(<Aerials />);

			const modalElement = screen.queryByRole('dialog');

			expect(modalElement).not.toBeInTheDocument();
		});

		describe('Behaviours', () => {
			it('should display modal on click of image', async () => {
				render(<Aerials />);

				const handleImageOnClick = jest.fn();
				const user = userEvent.setup();

				const imgElement = screen.getByRole('img', {
					name: /dale farm aerial photo 1/i,
				});

				await user.click(imgElement);

				const modalElement = screen.getByRole('dialog');

				expect(modalElement).toBeInTheDocument();
			});
		});
	});
});
