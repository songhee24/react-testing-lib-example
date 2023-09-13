import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";

describe("Counter test", () => {
  test("click test", () => {
    render(
      <Provider store={createReduxStore()}>
        <Counter />
      </Provider>
    );
    const incrementBtn = screen.getByTestId("increment-btn");

    expect(screen.getByTestId("value-title")).toHaveTextContent("0");
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("1");
  });
});
