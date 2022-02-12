import '../Styles/Detail.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Reviews from '../Components/Reviews';
import { useParams } from 'react-router-dom';
import Restaurant from '../Components/Restaurant';
import { fetchRestaurantById, fetchReviews } from '../services/fetch-utils';
import CommentForm from '../Components/CommentForm';

export default function Detail({ user }) {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getrestaurant = async () => {
      const rest = await fetchRestaurantById(id);
      setRestaurant(rest);
    };
    getrestaurant();
  }, [id]);

  useEffect(() => {
    const getReview = async () => {
      const reviewData = await fetchReviews(id);
      setReviews(reviewData);
    };
    getReview();
  }, [restaurant.id]);

  return (
    <div>
      <Restaurant restaurant={restaurant} />
      <Reviews reviews={reviews} />
      {user && <CommentForm restaurant={restaurant} user={user} setReview={setReviews} />}
    </div>
  );
}
