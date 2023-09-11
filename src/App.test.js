import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world element', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  const buttonElem = screen.getByRole('button');
  const inputElem = screen.getByPlaceholderText(/input value/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(buttonElem).toBeInTheDocument();
  expect(inputElem).toBeInTheDocument();
});
