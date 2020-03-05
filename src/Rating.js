import React from "react";

const Rating = ({ rating, onchangeRating = () => {} }) => {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span
          onClick={() => {
            onchangeRating(i + 1);
          }}
          key={i}
        >
          ★
        </span>
      );
    } else {
      stars.push(
        <span
          onClick={() => {
            onchangeRating(i + 1);
          }}
          key={i}
        >
          ☆
        </span>
      );
    }
  }
  return <div>{stars}</div>;
};
export default Rating;
