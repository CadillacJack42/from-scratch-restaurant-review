import React from 'react';
import AuthForm from '../Components/AuthForm';
import '../Styles/Auth.css';

export default function Auth({ setUser }) {
  return (
    <div>
      <AuthForm setUser={setUser} />
    </div>
  );
}
