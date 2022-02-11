import React from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <Link to={'/'}>Home</Link> {' | '}
      <Link to={'/auth'}>SignIn/SignUp</Link> {' | '}
      <Link to={'/create'}>Create New Resaurant</Link> {' | '}
      <Link to={'/'}>Logout</Link>
    </div>
  );
}
