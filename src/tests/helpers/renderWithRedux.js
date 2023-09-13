import { createReduxStore } from "../../store/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

export const renderWithRedux = (Component, initialState = {}) => {
  const store = createReduxStore(initialState);
  return render(<Provider store={store}>{Component}</Provider>);
};
