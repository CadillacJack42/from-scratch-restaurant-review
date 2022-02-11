import React, { useState } from 'react';
import '../Styles/Detail.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurantById } from '../services/fetch-utils';
import Restaurant from '../Components/Restaurant';

export default function Detail() {
  const { id } = useParams();
  console.log(id);
  const [restaurant, setRestaurant] = useState('');

  useEffect(() => {
    const getrestaurant = async () => {
      const rest = await fetchRestaurantById(id);
      setRestaurant(rest);
    };
    getrestaurant();
  }, []);
  return (
    <div>
      <Restaurant restaurant={restaurant} />
    </div>
  );
}
