import React from 'react';
import PropTypes from 'prop-types';

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

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Reviews;
