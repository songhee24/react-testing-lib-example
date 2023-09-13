import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import AppRouter from "../../router/AppRouter";
import { MemoryRouter } from "react-router-dom";

export const renderTestApp = (Component, options) => {
  const store = createReduxStore(options?.initialStore);

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.initialRoute]}>
        <AppRouter />
        {Component}
      </MemoryRouter>
    </Provider>
  );
};
