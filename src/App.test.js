import { render, screen } from '@testing-library/react';
import App from './App';


describe('React Core Test',  () => {
  test('renders hello world element', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const buttonElem = screen.getByRole('button');
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(buttonElem).toBeInTheDocument();
    expect(inputElem).toMatchSnapshot();
    // screen.debug()
  });

  test('screen methods', () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello world2/i)
    // expect(helloWorldElem).toBeNull()
    // screen.debug()
    const helloWorldElem = screen.findByText(/hello world2/i)
    expect(helloWorldElem).toBeNull()
  });
})
