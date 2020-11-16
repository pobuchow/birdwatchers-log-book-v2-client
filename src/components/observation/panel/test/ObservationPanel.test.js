import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, act } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { observationService } from "./../../../../services/observationService";
import ObservationPanel from "../ObservationPanel";
import { queryByTestId, getByText } from "@testing-library/dom";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ObservationPanel></ObservationPanel>, div);
});

it("renders with fetched data", async () => {  
  const fakeObservations = [
    {
      id: 3,
      speciesName: "Eurasian three-toed woodpecker",
      date: "2020-04-19",
      username: "Diego",
    },
    {
      id: 2,
      speciesName: "European green woodpecker",
      date: "2020-04-18",
      username: "Diego",
    },
    {
      id: 1,
      speciesName: "Black woodpecker",
      date: "2020-04-17",
      username: "Diego",
    },
  ];
  jest
    .spyOn(observationService, "getLastObservationsForAuthUser")
    .mockImplementation(() => fakeObservations);

    await act(async () => {
        render(<ObservationPanel size={3} />);
        await expect(
          queryByTestId(document.documentElement, "observation-panel-paper")
        ).toBeInTheDocument();
      
        await expect(
          queryByTestId(document.documentElement, "observation-panel-table-body")
        ).toBeInTheDocument();
      
        await expect(
          getByText(document.documentElement, "Black woodpecker")
        ).toBeInTheDocument();

        await expect(
          getByText(document.documentElement, "European green woodpecker")
        ).toBeInTheDocument();
      });
  
  

  observationService.getLastObservationsForAuthUser.mockRestore();
});
