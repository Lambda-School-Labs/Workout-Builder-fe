import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "../Login";
import mockAxios from "axios";

test("renders Login component", () => {
  const { getByLabelText } = render(<Login />);

  const email = getByLabelText(/email/i);
  const password = getByLabelText(/password/i);

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});

test("allows the user to login successfully", async () => {
  const fakeResponse = {
    status: 200,
    data: { token: "12345", first_name: "bob", last_name: "bob" }
  };

  mockAxios.post.mockResolvedValueOnce(fakeResponse);

  jest.spyOn(window.localStorage.__proto__, "setItem");
  window.localStorage.__proto__.setItem = jest.fn();

  const navigate = jest.fn();

  const { getByLabelText, getByTestId } = render(<Login navigate={navigate} />);

  // fill out the form
  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "BobBobbington@gmail.com" }
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "Bob12345" }
  });

  // click the login button
  fireEvent.click(getByTestId("login"));

  // wait 4 seconds for the server to work
  await new Promise(r => setTimeout(r, 1000));

  // expecting localstorage filled
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenCalled();
});
