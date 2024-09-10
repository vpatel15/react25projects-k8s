import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
  render(<App />);
  const projectTitle = screen.getByText(/React 25 Projects/i);
  expect(projectTitle).toBeInTheDocument();
});
