import React from 'react';

const Reviews = ({ reviews }) => (
  <div>
    {reviews.length > 0 ? (
      <ul>
        {reviews.map(({ author, content }) => (
          <li key={author}>
            <p>{author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don`t have any reviews for this movie.</p>
    )}
  </div>
);

export default Reviews;
