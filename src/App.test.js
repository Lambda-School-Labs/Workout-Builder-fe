import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react';
import App from './App';
import Header from './components/global/Header'
import SignUp from './components/auth/SignUp'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './components/reducers/index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders header component', () => {
  const wrapper = rtl.render(<Header/>)
  const element = wrapper.getByText(/login/i)
  expect(element).toBeInTheDocument()
})
// it('renders Sign Up without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<SignUp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// })
const store = createStore(reducer, applyMiddleware(thunk));
it('renders Sign Up component', () => {
  const wrapper = rtl.render(  <Provider store = {store}>
  <SignUp/>
  </Provider>)
  const element = wrapper.getByText(/email/i)
  expect(element).toBeInTheDocument()
})
