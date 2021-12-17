import { render, screen } from '@testing-library/react';
import Aside from './Aside';

//======Checks to see if tag is showing using title search=====\\
test('renders dashboard tag', ()=>{
    render(<Aside />);
    const spanElement = screen.getByText(/Dashboard/i);
    expect(spanElement).toBeInTheDocument();
  })

test('renders RSS Feed tag', ()=>{
    render(<Aside />);
    const spanElement = screen.getByText(/RSS Feed/i);
    expect(spanElement).toBeInTheDocument();
  })

  test('renders Activity Feed tag', ()=>{
    render(<Aside />);
    const spanElement = screen.getByText(/Activity/i);
    expect(spanElement).toBeInTheDocument();
  })