import { render, screen } from '@testing-library/react';
import Forum from './Forum'

//======Checks to see if Dashboard tag is showing=====\\
test('renders dashboard tag', () => {
  render(<Forum />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', ()=>{
render(<Forum />);
const spanElement = screen.getByText(/Customers/i);
expect(spanElement).toBeInTheDocument();
})

test('renders Authentication tag', ()=>{
  render(<Forum />);
  const spanElement = screen.getByText(/Authentication/i);
  expect(spanElement).toBeInTheDocument();
})

test('renders Payments tag', ()=>{
  render(<Forum />);
  const spanElement = screen.getByText(/Payments/i);
  expect(spanElement).toBeInTheDocument();
})

test('renders Transfers tag', ()=>{
  render(<Forum />);
  const spanElement = screen.getByText(/Transfers/i);
  expect(spanElement).toBeInTheDocument();
})

test('renders Balance tag', ()=>{
  render(<Forum />);
  const spanElement = screen.getByText(/Balance/i);
  expect(spanElement).toBeInTheDocument();
})

test('renders', ()=>{
  render(<Forum />);
  const spanElement = screen.getByTitle(/question/i);
  expect(spanElement).toBeInTheDocument();
})