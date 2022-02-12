import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../services/fetch-utils';

export default function Logout({ setUser }) {
  const logUserOut = async () => {
    await logout();
    setUser('');
  };
  logUserOut();
  return (
    <div>
      <Redirect to={'/'}></Redirect>;
    </div>
  );
}
