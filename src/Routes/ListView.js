import React, { useEffect } from 'react';
import Restaurant from '../Components/Restaurant';
import { fetchAllRestaurants } from '../services/fetch-utils';
import '../Styles/ListView.css';

export default function ListView({ setRestaurant, restaurant }) {
  // const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    let unmounted = false;
    const getRestaurants = async () => {
      try {
        const data = await fetchAllRestaurants();
        !unmounted && setRestaurant(data);
      } catch (error) {
        alert(error);
      }
    };

    getRestaurants();
    return () => {
      unmounted = true;
    };
  }, [setRestaurant]);

  return (
    <div className="all-restaurants-container">
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
