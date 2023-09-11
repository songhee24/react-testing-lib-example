import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world element', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  expect(helloWorldElem).toBeInTheDocument();
});
