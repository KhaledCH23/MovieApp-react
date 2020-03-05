import React from "react";
import StarRatingComponent from "react-star-rating-component";
const RatingFilter = ({ rating, onStarClick }) => {
  return (
    <div className="rating-filter">
      <span className="rating-filter-text">Minimum rating</span>
      <span>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
        />
      </span>
    </div>
  );
};
export default RatingFilter;
