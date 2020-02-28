import React from 'react';
import { render } from '@testing-library/react';
import ProgramsContainer from '../ProgramsContainer';

describe('ProgramsContainer', () => {
  it('renders successfully to the screen', () => {
    const { getByText } = render(<ProgramsContainer />);
    getByText('Create new program');
  });
});