import { render, screen } from '@testing-library/react';
import Cheatsheet from './Cheatsheet';


//======Checks to see if Dashboard tag is showing using title search=====\\
test('renders css tag', ()=>{
    render(<Cheatsheet />);
    const spanElement = screen.getByTitle(/css/i);
    expect(spanElement).toBeInTheDocument();
  })

  test('renders js tag', ()=>{
    render(<Cheatsheet />);
    const spanElement = screen.getByTitle(/js/i);
    expect(spanElement).toBeInTheDocument();
  }) 
  
  test('renders html tag', ()=>{
    render(<Cheatsheet />);
    const spanElement = screen.getByTitle(/html/i);
    expect(spanElement).toBeInTheDocument();
  })