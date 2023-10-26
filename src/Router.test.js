import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST ROUTER APP", () => {
  test("Router test", () => {
    render(<App />);
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");

    fireEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    fireEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
});
