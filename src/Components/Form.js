import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUpUser, signInUser } from '../services/fetch-utils';
import '../Styles/Form.css';

export default function Form() {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [formType, setFormType] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    formType === 'in' ? handleSignIn() : handleSignUp();
  };

  const handleSignUp = (e) => {
    e.preventdefault();
    signUpUser(userEmail, userPassword);
    // <Redirect to={'/'}></Redirect>;
  };

  const handleSignIn = (e) => {
    e.preventdefault();
    signInUser(userEmail, userPassword);
    // <Redirect to={'/'}></Redirect>;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Email :<input value={userEmail} onChange={handleEmailChange}></input>
        </label>
        <label>
          Enter Password :<input value={userPassword} onChange={handlePasswordChange}></input>
        </label>
        <button onClick={() => setFormType('in')}>Sign In</button>
        <button onClick={() => setFormType('up')}>Sign Up</button>
      </form>
    </div>
  );
}
