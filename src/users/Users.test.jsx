import { render, screen } from "@testing-library/react";
import Users from "./Users";

jest.mock("axios");
describe("USERS TEST", () => {
  const mockGet = jest.fn();
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

  test("renders users", async () => {
    mockGet.mockReturnValue(response);
    render(<Users />);
    screen.debug();
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(mockGet).toBeCalledTimes(1);
  });
});
