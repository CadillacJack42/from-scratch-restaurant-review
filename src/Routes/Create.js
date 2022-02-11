import React from 'react';
import CreateForm from '../Components/CreateForm';
import { checkAuth } from '../services/fetch-utils';
import '../Styles/Create.css';

export default function Create() {
  return (
    <div>
      {checkAuth()}
      <CreateForm />
    </div>
  );
}
