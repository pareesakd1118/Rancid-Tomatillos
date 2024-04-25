import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate, } from "react-router-dom";
import "./Desc.css";

function Desc() {
  const [selectedMovie, setSelectedMovie] = useState({});
  let movieID = useParams().id;
  const navigate = useNavigate();
  function getSingleMovie() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/error/400");
        } else {
          return res.json();
        }
      })
      .then((data) => setSelectedMovie(data.movie))
      .catch((err) => navigate("/error/400"));
  }

  useEffect(() => {
    getSingleMovie();
  }, []);

  return (
    <div className="movieDescDisplay">
      <div
        title={selectedMovie.title}
        className="displayedMovie"
        style={{ backgroundImage: `url(${selectedMovie.poster_path})` }}
        id={selectedMovie.id}
      ></div>
      <div
        className="movieDesc"
        style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}
      >
        <h2>{selectedMovie.title}</h2>
        <p>{selectedMovie.tagline}</p>
        <h3>Release Date: {selectedMovie.release_date}</h3>
        <p>Overview: {selectedMovie.overview}</p>
        <p>Runtime: {selectedMovie.runtime} Minutes</p>
        <p>Rating: {selectedMovie.average_rating}/10</p>
        <button className="backButton" onClick={() => navigate(-1)}> Back </button>
      </div>
    </div>
  );
}

//ask what we do in this case
export default Desc;
