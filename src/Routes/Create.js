import React from 'react';
import { Redirect } from 'react-router-dom';
import CreateForm from '../Components/CreateForm';
import { checkAuth } from '../services/fetch-utils';
import '../Styles/Create.css';

export default function Create({ user }) {
  return <div>{user ? <CreateForm /> : <Redirect to={'/auth'} />}</div>;
}
