import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../services/fetch-utils';

export default function Logout() {
  const logUserOut = async () => {
    await logout();
    <Redirect to={'/'} />;
  };
  logUserOut();
  return (
    <div>
      <Redirect to={'/'} />;
    </div>
  );
}
