import "./Movie.css";
import PropTypes from "prop-types";

function Movie({ title, id, image }) {
  return (
    <div
      title={title}
      className="movie"
      style={{ backgroundImage: `url(${image})` }}
      id={id}
    ></div>
  );
}

export default Movie;

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
