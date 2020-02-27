// import "@testing-library/jest-dom/extend-expect";
// import React from "react";
// import { render } from "@testing-library/react";
// // import { store } from "../../index";
// import { Provider } from "react-redux";
// import ProgramCreation from "./ProgramCreation";

// // jest.mock('../../actions', () => ({
// //   fetchAllData: jest.fn(() => Promise.resolve())
// // }));

// jest.mock('react-redux', () => ({
//   store: () => jest.fn()
// }));

// jest.mock('react-redux', () => ({
//     connect: () => jest.fn()
//   }));

// test("renders Program Creation", () => {
//     const { getByText } = render(<Provider store={store}><ProgramCreation /></Provider>);

//     const preview = getByText(/Preview/i);

//     expect(preview).toBeInTheDocument();
// });