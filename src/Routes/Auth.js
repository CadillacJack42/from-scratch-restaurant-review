import React from 'react';
import AuthForm from '../Components/AuthForm';
import '../Styles/Auth.css';

export default function Auth({ setUser }) {
  return (
    <div className="auth-form-container">
      <AuthForm setUser={setUser} />
    </div>
  );
}
