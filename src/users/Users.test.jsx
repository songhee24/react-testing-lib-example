import { fireEvent, render, screen } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import React from "react";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
jest.mock("axios");
describe("USERS TEST", () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });

  test("renders users test", async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(null, "/users"));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
    expect(users).toMatchSnapshot();
  });

  test("redirect to details page test", async () => {
    axios.get.mockReturnValue(response);
    render(renderWithRouter(null, "/users"));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    fireEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
