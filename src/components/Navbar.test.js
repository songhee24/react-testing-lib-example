import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import Navbar from "./Navbar";

describe("NAVBAR TEST", () => {
  test("navbar router testing", () => {
    render(renderWithRouter(<Navbar />));
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    const usersLink = screen.getByTestId("users-link");
    fireEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    fireEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
    fireEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
