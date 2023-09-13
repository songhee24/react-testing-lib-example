import { fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";

describe("Counter test", () => {
  test("click test", () => {
    renderWithRedux(<Counter />);
    const incrementBtn = screen.getByTestId("increment-btn");

    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("1");
  });
});
