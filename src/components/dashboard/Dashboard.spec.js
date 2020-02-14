import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("it renders to the screen", () => {
  const { getByText } = render(<Dashboard />);
  getByText("Program due:");
});
