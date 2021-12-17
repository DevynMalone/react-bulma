import { render, screen } from '@testing-library/react';
import InstaAlbum from './InstaAlbum';

//======Checks to see if tag is showing using title search=====\\
test('renders license tag', ()=>{
    render(<InstaAlbum />);
    const spanElement = screen.getByTitle(/license/i);
    expect(spanElement).toBeInTheDocument();
  })

  test('renders comment tag', ()=>{
    render(<InstaAlbum />);
    const spanElement = screen.getByTitle(/comment/i);
    expect(spanElement).toBeInTheDocument();
  })

  test('renders timestamp tag', ()=>{
    render(<InstaAlbum />);
    const spanElement = screen.getByTitle(/time/i);
    expect(spanElement).toBeInTheDocument();
  })

  test('renders searchbar tag', ()=>{
    render(<InstaAlbum />);
    const spanElement = screen.getByTitle(/search/i);
    expect(spanElement).toBeInTheDocument();
  })