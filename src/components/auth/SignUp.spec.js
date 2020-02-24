import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SignUp from "./SignUp";
import mockAxios from "axios";

test("renders SignUp component", () => {
  const { getByLabelText } = render(<SignUp />);

  const first_name = getByLabelText(/First Name/i);
  const last_name = getByLabelText(/Last Name/i);
  const email = getByLabelText(/email/i);
  const password = getByLabelText(/password/i);

  expect(first_name).toBeInTheDocument();
  expect(last_name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});

test("allows the user to sign up successfully", async () => {
  const fakeResponse = {
    status: 201,
    data: {
      token: "12345",
      message: "asdf",
      first_name: "bob",
      last_name: "bob"
    }
  };

  mockAxios.post.mockResolvedValue(fakeResponse);

  jest.spyOn(window.localStorage.__proto__, "setItem");
  window.localStorage.__proto__.setItem = jest.fn();

  const navigate = jest.fn();

  const { getByLabelText, getByTestId } = render(
    <SignUp navigate={navigate} />
  );

  // fill out the form
  fireEvent.change(getByLabelText(/First Name/i), {
    target: { value: "test" }
  });
  fireEvent.change(getByLabelText(/Last Name/i), {
    target: { value: "test" }
  });
  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "test@gmail.com" }
  });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "Test12345" }
  });

  // click the login button
  fireEvent.click(getByTestId("signup"));

  // wait 4 seconds for the server to work
  await new Promise(r => setTimeout(r, 1000));

  // expecting localstorage filled
  expect(mockAxios.post).toHaveBeenCalledTimes(1);
  expect(navigate).toHaveBeenCalledTimes(1);
  expect(localStorage.setItem).toHaveBeenCalled();
});
