import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('renders to the screen successfully', () => {
    render(<App />);
  });
});