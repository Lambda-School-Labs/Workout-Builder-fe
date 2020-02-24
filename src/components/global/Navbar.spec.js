import React from "react";
import { render } from "@testing-library/react";
import NavBar from "./NavBar";

test("it renders to the screen", () => {
  const { getByText } = render(<NavBar />);
  getByText("Stronger Faster");
});
