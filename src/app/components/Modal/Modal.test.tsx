import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Modal from './Modal';

const mockSetIsModalOpen = jest.fn();
const mockHandlePrevOnClick = jest.fn();
const mockHandleNextOnClick = jest.fn();

const mockActiveImage = {
	imgSmall: '',
	imgLarge: '',
	url: '',
	alt: '',
  src: ''
};

describe('Modal', () => {
	describe('Renders', () => {
		it('should display modal component', () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const modalElement = screen.getByRole('dialog');

			expect(modalElement).toBeInTheDocument();
		});

		it('should display correct number of modal buttons', () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const closeButtonElement = screen.getAllByRole('button');

			expect(closeButtonElement).toHaveLength(3);
		});

		it('should render close button', () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const closeButtonElement = screen.getByRole('button', {
				name: /close modal/i,
			});

			expect(closeButtonElement).toBeInTheDocument();
		});

		it('should render previous image button', () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const prevButtonElement = screen.getByRole('button', {
				name: /previous image/i,
			});

			expect(prevButtonElement).toBeInTheDocument();
		});

		it('should render next image button', () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const nextButtonElement = screen.getByRole('button', {
				name: /next image/i,
			});

			expect(nextButtonElement).toBeInTheDocument();
		});
	});

	describe('Behaviours', () => {
		it('should close modal on click of close modal button', async () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const user = userEvent.setup();

			const closeButtonElement = screen.getByRole('button', {
				name: /close modal/i,
			});

			expect(closeButtonElement).toBeInTheDocument();

			await user.click(closeButtonElement);

			expect(mockSetIsModalOpen).toHaveBeenCalledTimes(1);
		});

		it('should display previous image on click of previous image button', async () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const user = userEvent.setup();

			const prevImageButtonElement = screen.getByRole('button', {
				name: /previous image/i,
			});

			expect(prevImageButtonElement).toBeInTheDocument();

			await user.click(prevImageButtonElement);

			expect(mockHandlePrevOnClick).toHaveBeenCalledTimes(1);
		});

		it('should display next image on click of next image button', async () => {
			render(
				<Modal
					setIsModalOpen={mockSetIsModalOpen}
					handlePrevOnClick={mockHandlePrevOnClick}
					handleNextOnClick={mockHandleNextOnClick}
					activeImage={mockActiveImage}
				/>
			);

			const user = userEvent.setup();

			const nextImageButtonElement = screen.getByRole('button', {
				name: /next image/i,
			});

			expect(nextImageButtonElement).toBeInTheDocument();

			await user.click(nextImageButtonElement);

			expect(mockHandleNextOnClick).toHaveBeenCalledTimes(1);
		});
	});
});
