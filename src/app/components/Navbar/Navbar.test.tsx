import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  describe('Renders', () => {
    
    it('should render the banner element', () => {
      render(<Navbar />);
      const bannerElement = screen.getByRole('banner');
      expect(bannerElement).toBeInTheDocument();
    });
    
    it('should render the image element', () => {
      render(<Navbar />);
      const imageElement = screen.getByRole('img', {
        name: /360 drone pro company logo/i,
      });
      expect(imageElement).toBeInTheDocument();
    });
  
    it('should render correct number of links', () => {
      render(<Navbar />);
      const linkElements = screen.getAllByRole('link');
      expect(linkElements).toHaveLength(4);
    });
  
    it('should render link element with correct route path', () => {
      render(<Navbar />);
      const linkElement = screen.getByRole('link', { name: /home/i });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', '/');
    });
  
    it('should render button element', () => {
      render(<Navbar />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });
  })
});
