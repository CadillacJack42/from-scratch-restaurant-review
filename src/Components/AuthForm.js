import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signUpUser, signInUser } from '../services/fetch-utils';
import '../Styles/Form.css';

export default function Form({ setUser }) {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [formType, setFormType] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formType === 'in' ? handleSignIn() : handleSignUp();
  };

  const handleSignUp = async () => {
    const user = await signUpUser(userEmail, userPassword);
    setUser(user);
    user && setRefresh(true);
  };

  const handleSignIn = async () => {
    const user = await signInUser(userEmail, userPassword);
    setUser(user);
    user && setRefresh(true);
  };

  return (
    <div className="auth-form-subcontainer">
      {refresh && <Redirect to={'/'} />}
      <form onSubmit={handleSubmit} className="auth-form-proper">
        <label>
          Enter Email :<input value={userEmail} onChange={handleEmailChange}></input>
        </label>
        <label>
          Enter Password :
          <input value={userPassword} onChange={handlePasswordChange} type="password"></input>
        </label>
        <div className="form-buttons">
          <button onClick={() => setFormType('in')} type="submit">
            Sign In
          </button>
          <button onClick={() => setFormType('up')} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
