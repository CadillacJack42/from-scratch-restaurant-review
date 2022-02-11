import React, { useEffect, useState } from 'react';
import Restaurant from '../Components/Restaurant';
import { fetchAllRestaurants } from '../services/fetch-utils';
import '../Styles/ListView.css';

export default function ListView() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await fetchAllRestaurants();
      setRestaurant(data);
    };
    getRestaurants();
  }, []);

  console.log(restaurant);

  return (
    <div>
      {restaurant ? (
        restaurant.map((spot, i) => {
          return <Restaurant restaurant={spot} key={spot + i} />;
        })
      ) : (
        <h1>Loading Restaurants</h1>
      )}
    </div>
  );
}
