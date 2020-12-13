import React from "react";
import ReactDOM from 'react-dom';
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddObservationPanel from './../AddObservationPanel';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddObservationPanel></AddObservationPanel>, div);
});
