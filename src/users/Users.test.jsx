import { render } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";

jest.mock(axios);
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

  test("renders users", () => {
    axios.get.mockReturnValue(response);
    render(<Users />);
  });
});
