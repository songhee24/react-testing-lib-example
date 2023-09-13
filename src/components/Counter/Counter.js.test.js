import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter test", () => {
  test("router", () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId("increment-btn");

    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
    userEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("1");
  });
});
