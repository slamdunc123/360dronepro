import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './page';

it('should render correct h1 element', () => {
  render(<Home />);

  const headingEl = screen.getByRole('heading', {
    level: 1,
    name: /360dronepro/i,
  });
  expect(headingEl).toBeInTheDocument();
});
it('should render correct h2 element', () => {
  render(<Home />);

  const headingEl = screen.getByRole('heading', {
    level: 2,
    name: /services/i,
  });
  expect(headingEl).toBeInTheDocument();
});
