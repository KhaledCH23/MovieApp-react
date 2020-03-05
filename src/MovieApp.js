import React, { Component } from "react";
import MovieModal from "./MovieModal";
import NameFilter from "./NameFilter";
import RatingFilter from "./RatingFilter";
import MovieList from "./MovieList";
import "./styles.css";
const got = {
  title: "Game of thrones",
  year: "2011",
  image: "https://i.ebayimg.com/images/g/aU0AAOSwoGxcpX8D/s-l300.jpg",
  rating: 4
};
const dark = {
  title: "Dark",
  year: "2017",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/DarkNetflixPoster.jpg/250px-DarkNetflixPoster.jpg",
  rating: 5
};
const the100 = {
  title: "The 100",
  year: "2014",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/91MwAPfRKgL._SY679_.jpg",
  rating: 1
};
const vikings = {
  title: "Vikings",
  year: "2013",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51DjfQ5xxrL._AC_.jpg",
  rating: 2
};
const thewitcher = {
  title: "The Witcher",
  year: "2019",
  image:
    "https://m.media-amazon.com/images/M/MV5BOGE4MmVjMDgtMzIzYy00NjEwLWJlODMtMDI1MGY2ZDlhMzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UX182_CR0,0,182,268_AL_.jpg",
  rating: 3
};
const prisonbreak = {
  title: "PrisonBreak",
  year: "2007",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51Xb88ydEDL._AC_.jpg",
  rating: 4
};
const mrrobot = {
  title: "Mr Robot",
  year: "2015",
  image:
    "https://external-preview.redd.it/dMQt4tbSAXOFPrKPdV6ycwX-W6CZpwqGKTJpp-ET0aY.jpg?auto=webp&s=b100c07922a736bae8cfefcc1ae862621f253802",
  rating: 3
};
const blackmirror = {
  title: "Black Mirror",
  year: "2011",
  image:
    "https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
  rating: 3
};
const listMovies = [
  got,
  dark,
  mrrobot,
  vikings,
  thewitcher,
  prisonbreak,
  the100,
  blackmirror
];
class MovieApp extends Component {
  state = {
    rating: 0,
    titleFilter: "",
    movies: listMovies
  };

  addMovie = newMovie =>
    this.setState({ movies: [...this.state.movies, newMovie] });

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  changeName = e => {
    this.setState({ titleFilter: e.target.value });
  };

  render() {
    const { rating } = this.state;
    const { title } = this.state;
    return (
      <div className="App">
        <div className="movie-app">
          <header className="movie-app-header">
            <NameFilter value={title} onChange={this.changeName} />
            <RatingFilter value={rating} onStarClick={this.onStarClick} />
          </header>
          <main className="movie-app-main">
            <MovieList
              movie={this.state.movies}
              titleFilter={this.state.titleFilter}
              rating={this.state.rating}
            />
            <MovieModal
              handelSubmit={this.handelSubmit}
              addMovie={this.addMovie}
            />
          </main>
        </div>
      </div>
    );
  }
}
export default MovieApp;
