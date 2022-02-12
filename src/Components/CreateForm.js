import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createRestaurant } from '../services/fetch-utils';

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
    await createRestaurant(newRestaurant);
    setRefresh(true);
  };

  return (
    <div>
      {refresh && <Redirect to={'/'} />}
      <form onSubmit={handleSubmit}>
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
          <label>
            Address :<input onChange={handleAddressChange} value={address}></input>
          </label>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
