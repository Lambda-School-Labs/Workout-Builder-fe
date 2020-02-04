import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../../../components/reducers/index'
import Login from '../login'
import axios from 'axios';

jest.mock('axios');

const store = createStore(reducer, applyMiddleware(thunk));

test('renders Login component', () => {

    render (<Provider store = {store}>
        <Login />
        </Provider>)

    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
})

test('allows the user to login successfully', async () => {

    const fakeResponse = { data: {token: '12345', first_name: 'bob', last_name: 'bob'}}

    axios.post.mockResolvedValue(fakeResponse);

    // mock out window.fetch for the test

    // jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    //     return Promise.resolve({
    //         json: () => Promise.resolve(fakeUserResponse),
    //     })
    // })

    render (<Provider store = {store}>
        <Login />
        </Provider>)

    // fill out the form
    fireEvent.change(screen.getByLabelText(/email/i), {
        target: {value: 'BobBobbington@gmail.com'},
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: 'Bob12345'},
    })

    // click the login button
    fireEvent.click(screen.getByRole('login'))

    // wait 4 seconds for the server to work
    await new Promise((r) => setTimeout(r, 1000));

    // expecting a token of length 164
    expect(window.localStorage.getItem('token')).toBe('12345');
})