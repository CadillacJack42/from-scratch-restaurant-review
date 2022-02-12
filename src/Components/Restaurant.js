import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Restaurant.css';

export default function Restaurant({ restaurant }) {
  return (
    <div className="list-display-items">
      <Link to={`/detail/${restaurant.id}`} className="list-item-link">
        <h2>{restaurant.name}</h2>
        <p>Price Range : {restaurant.prices}</p>
        <p>Cuisine Type : {restaurant.cuisine}</p>
        <p>Address : {restaurant.address}</p>
      </Link>
    </div>
  );
}
