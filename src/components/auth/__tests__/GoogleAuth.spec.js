import React from 'react';
import GoogleAuth from '../GoogleAuth';
import { render } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockAxios = new MockAdapter(axios);

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(() => Promise.resolve())
}));

describe('GoogleAuth', () => {
  it('renders successfully', () => {
    mockAxios.onGet('/clients').replyOnce(200, []);
    mockAxios.onGet('/exercises').replyOnce(200, []);
    mockAxios.onGet('/programs').replyOnce(200, []);

    const { queryByTestId } = render(
      <GoogleAuth
        location={{ search: '?token=blah&first_name=woof&last_name=woof' }}
        navigate={jest.fn()}
      />);

    expect(queryByTestId('nada')).toBeNull();
  });
});