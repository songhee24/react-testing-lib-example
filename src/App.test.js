import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("React Core Test", () => {
  test("renders hello world element", () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const buttonElem = screen.getByRole("button");
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(buttonElem).toBeInTheDocument();
    expect(inputElem).toMatchSnapshot();
    // screen.debug()
  });

  test("screen methods", async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello world2/i)
    // expect(helloWorldElem).toBeNull()
    screen.debug();
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: "red" });
    screen.debug();
  });

  test("CLICK BTN", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");

    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });

  test("INPUT EVENT", () => {
    render(<App />);
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId("value-elem")).toHaveTextContent("");
    // Исскуственное событие
    // fireEvent.input(inputElem, {
    //   target: { value: "123123" },
    // });
    // Близко к пользователю, обрабатываются события нажатия клавиш
    userEvent.type(inputElem, "123123");
    expect(screen.queryByTestId("value-elem")).toHaveTextContent("123123");
  });
});
