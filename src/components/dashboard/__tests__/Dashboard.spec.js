import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('renders successfully to the screen', () => {
    const { getByText } = render(<Dashboard />);
    getByText('Programs due');
  });
});