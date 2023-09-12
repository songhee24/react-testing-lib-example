import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";

export const renderWithRouter = (Component, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {Component}
    </MemoryRouter>
  );
};
