import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createRestaurant } from '../services/fetch-utils';
import '../Styles/CreateForm.css';

export default function CreateForm() {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [expense, setExpense] = useState('$');
  const [address, setAddress] = useState('');
  const [refresh, setRefresh] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleCuisineChange = (e) => {
    setCuisine(e.target.value);
  };
  const handleExpenseChange = (e) => {
    setExpense(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRestaurant = {
      name,
      cuisine,
      prices: expense,
      address,
    };
    try {
      await createRestaurant(newRestaurant);
      setRefresh(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="create-form-container">
      {refresh && <Redirect to={'/'} />}
      <form className="create-form-proper" onSubmit={handleSubmit}>
        <label>
          Restaurant Name :<input onChange={handleNameChange} value={name}></input>
        </label>
        <label>
          Cuisine Type :<input onChange={handleCuisineChange} value={cuisine}></input>
        </label>
        <label>
          How Expensive :
          <select value={expense} onChange={handleExpenseChange}>
            <option value={'$'}>$</option>
            <option value={'$$'}>$$</option>
            <option value={'$$$'}>$$$</option>
            <option value={'$$$$'}>$$$$</option>
            <option value={'$$$$$'}>$$$$$</option>
          </select>
        </label>
        <label>
          Address :<input onChange={handleAddressChange} value={address}></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
