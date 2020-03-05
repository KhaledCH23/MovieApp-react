import React from "react";
import Rating from "./Rating";

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movie
        .filter(
          el =>
            el.rating >= props.rating &&
            el.title.toLowerCase().includes(props.titleFilter)
        )
        .map((el, i) => (
          <div className="movie-card" key={i}>
            <div className="movie-rating">
              <Rating rating={el.rating} />
            </div>
            <div
              className="movie-image"
              style={{
                backgroundImage: `url(${el.image})`
              }}
            />
            <div className="movie-description">
              {el.title} - {el.year}
            </div>
          </div>
        ))}
    </div>
  );
};
export default MovieList;
