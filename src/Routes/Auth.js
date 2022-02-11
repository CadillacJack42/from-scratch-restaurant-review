import React from 'react';
import AuthForm from '../Components/AuthForm';
import { redirectIfLoggedIn } from '../services/fetch-utils';
import '../Styles/Auth.css';

export default function Auth() {
  return (
    <div>
      {redirectIfLoggedIn()}
      <AuthForm />
    </div>
  );
}
