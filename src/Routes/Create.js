import React from 'react';
import { Redirect } from 'react-router-dom';
import CreateForm from '../Components/CreateForm';

export default function Create({ user }) {
  return (
    <div>
      <h3>Create New Resaurant</h3>
      {user ? <CreateForm /> : <Redirect to={'/auth'} />}
    </div>
  );
}
