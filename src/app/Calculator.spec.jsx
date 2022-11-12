import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';


describe('loads and displays Calculator', () => {
  render(<Calculator />)

  const stack = screen.getByRole('STACK');
  const button1 = screen.getByRole('BUTTON_1');
  const button0 = screen.getByRole('BUTTON_0');
  const enter = screen.getByRole('ENTER');
  const button5 = screen.getByRole('BUTTON_5');
  const button6 = screen.getByRole('BUTTON_6');

  fireEvent.click(button1);
  fireEvent.click(button0);
  fireEvent.click(enter);

  it('Has expected Stack: [10]', () => {
    expect(stack).toHaveTextContent('10');
  });

  fireEvent.click(button5);
  fireEvent.click(enter);

  it('Has expected Stack: [10, 5]', () => {
    expect(stack).toHaveTextContent('10 5');
  });

  fireEvent.click(button6);
  fireEvent.click(enter);

  it('Has expected Stack: [10, 5, 6]', () => {
    expect(stack).toHaveTextContent('10 5 6');
  });
});

it('Has expected Stack: [10, 11]', () => {
  render(<Calculator />)

  const stack = screen.getByRole('STACK');
  const addButton = screen.getByRole('ADD');
  const button1 = screen.getByRole('BUTTON_1');
  const button0 = screen.getByRole('BUTTON_0');
  const enter = screen.getByRole('ENTER');
  const button5 = screen.getByRole('BUTTON_5');
  const button6 = screen.getByRole('BUTTON_6');

  fireEvent.click(button1);
  fireEvent.click(button0);
  fireEvent.click(enter);
  fireEvent.click(button5);
  fireEvent.click(enter);
  fireEvent.click(button6);
  fireEvent.click(enter);
  fireEvent.click(addButton);

  expect(stack).toHaveTextContent('10 11');
});
// expect(screen.getByRole('calculator'));