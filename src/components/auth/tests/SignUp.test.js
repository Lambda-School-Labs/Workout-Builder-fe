import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../../../components/reducers/index'
import SignUp from '../SignUp'
import axios from 'axios';

jest.mock('axios');

const store = createStore(reducer, applyMiddleware(thunk));

test('renders SignUp component', () => {

    render (<Provider store = {store}>
        <SignUp />
        </Provider>)

    
    const first_name = screen.getByLabelText(/First Name/i);
    const last_name = screen.getByLabelText(/Last Name/i);
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);

    expect(first_name).toBeInTheDocument();
    expect(last_name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
})

test('allows the user to sign up successfully', async () => {

    const fakeResponse = { data: {token: '12345', message: 'asdf', first_name: 'bob', last_name: 'bob'}}

    axios.post.mockResolvedValue(fakeResponse);

    const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        clear: jest.fn()
    };

    global.localStorage = localStorageMock;

    render (<Provider store = {store}>
        <SignUp />
        </Provider>)

    // fill out the form
    fireEvent.change(screen.getByLabelText(/First Name/i), {
        target: {value: 'test'},
    })
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
        target: {value: 'test'},
    })
    fireEvent.change(screen.getByLabelText(/email/i), {
        target: {value: 'test@gmail.com'},
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
        target: {value: 'Test12345'},
    })

    // click the login button
    fireEvent.click(screen.getByRole('signup'))

    // wait 4 seconds for the server to work
    await new Promise((r) => setTimeout(r, 1000));

    // expecting a token of length 164
    expect(window.localStorage.getItem('token')).toBe('12345');
})