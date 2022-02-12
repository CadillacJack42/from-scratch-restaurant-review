import React from 'react';
import '../Styles/Reviews.css';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div key={review.id + review.user_id}>
            <p>{`${review.user} says : ${review.review}`}</p>
          </div>
        );
      })}
    </div>
  );
}
