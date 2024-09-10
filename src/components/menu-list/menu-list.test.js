import { render, screen } from '@testing-library/react';
import MenuList from './index';
import React from 'react';
import menus from '../nested-menu/data';

test('renders menu list with 3 items', () => {
  render(<MenuList menus={menus}/>);
  const menuItems = screen.getAllByRole('listitem');
  expect(menuItems.length).toBe(3);
});
