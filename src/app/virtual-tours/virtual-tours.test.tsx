import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import VirtualTours from './page';

describe('Render', () => {});

describe('Behaviours', () => {});

describe('API Calls', () => {
	it('should first fetch api data', async () => {
    render(<VirtualTours />);

    const headingElement = screen.getByRole('heading', {
      name: /virtual tours/i,
    });
    expect(headingElement).toBeInTheDocument();
    })
	});
