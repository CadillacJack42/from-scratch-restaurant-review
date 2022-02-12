import React from 'react';
import '../Styles/Nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ user }) {
  return (
    <div>
      <h1>Cadillac Jacks Restaurant Reviewer</h1>
      <Link to={'/'}>Home</Link> {' | '}
      {!user && <Link to={'/auth'}>SignIn/SignUp</Link>}
      {user && <Link to={'/create'}>Create New Resaurant</Link>}
      {user && ' | '}
      {user && <Link to={'/logout'}>Logout</Link>}
    </div>
  );
}
