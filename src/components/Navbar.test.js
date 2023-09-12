import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";

describe("NAVBAR TEST", () => {
  test("navbar main link testing", () => {
    render(renderWithRouter(<Navbar />));
    const mainLink = screen.getByTestId("main-link");
    fireEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("navbar about testing", () => {
    render(renderWithRouter(<Navbar />));
    const aboutLink = screen.getByTestId("about-link");
    fireEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("navbar users testing", () => {
    render(renderWithRouter(<Navbar />));
    const usersLink = screen.getByTestId("users-link");
    fireEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
