import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { createReview, fetchReviews } from '../services/fetch-utils';
import Reviews from './Reviews';

export default function CommentForm({ restaurant, user, setReview }) {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const review = {
      user: user.email,
      review: comment,
      restaurant: restaurant.id,
    };
    await createReview(review);

    const reviewData = await fetchReviews(restaurant.id);

    setComment('');
    setReview([...reviewData]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Submit Review :
          <textarea name={'comment'} value={comment} onChange={handleChange}></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
