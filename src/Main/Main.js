import "./Main.css";
import Movie from "../Movie/Movie";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Main({ movieData }) {
  function displayMovies() {
    return movieData.map((movie) => {
      return (
        <Link to={`/${movie.id}`}>
          <Movie
            title={movie.title}
            id={movie.id}
            image={movie.poster_path}
            rating={movie.average_rating}
            key={movie.id}
          />
        </Link>
      );
    });
  }

  return <div className="displayedMovies">{displayMovies()}</div>;
}

export default Main;

Main.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired
  })).isRequired
}

