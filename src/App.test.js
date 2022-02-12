import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Nav from './Components/Nav';

test('renders learn react link', () => {
  // const container = document.createElement('div');
  // console.log(container);
  // act(() => {
  //   ReactDOM.render(<Nav />, container);
  // });
  render(<App />);
  const linkElement = screen.getByText(/cadillac/i);
  expect(linkElement).toBeInTheDocument();
});
