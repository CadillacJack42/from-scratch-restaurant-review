import React, { useState } from 'react';
import '../Styles/CommentForm.css';
import { createReview, fetchReviews } from '../services/fetch-utils';

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
    try {
      await createReview(review);
      const reviewData = await fetchReviews(restaurant.id);
      setComment('');
      setReview([...reviewData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="comment-form-container">
      <form className="comment-form-proper" onSubmit={handleSubmit}>
        <label className="comment-form-label">
          Submit Review :
          <textarea name={'comment'} value={comment} onChange={handleChange}></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
