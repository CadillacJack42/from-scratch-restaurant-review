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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formType);
    formType === 'in' ? handleSignIn() : handleSignUp();
  };

  const handleSignUp = async () => {
    const user = await signUpUser(userEmail, userPassword);
    return <Redirect to={'/'}></Redirect>;
  };

  const handleSignIn = async () => {
    const user = await signInUser(userEmail, userPassword);
    return <Redirect to={'/'}></Redirect>;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Email :<input value={userEmail} onChange={handleEmailChange}></input>
        </label>
        <label>
          Enter Password :
          <input value={userPassword} onChange={handlePasswordChange} type="password"></input>
        </label>
        <button onClick={() => setFormType('in')} type="submit">
          Sign In
        </button>
        <button onClick={() => setFormType('up')} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
