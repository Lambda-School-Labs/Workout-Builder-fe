import React from 'react';
import { render } from '@testing-library/react';
import { LibraryDisplay } from '../LibraryDisplay';

describe('LibraryDisplay', () => {
  it('renders to the screen', () => {
    const { getByText } = render(<LibraryDisplay />);
    getByText('Create Exercise');
    console.log('done');
  });
});