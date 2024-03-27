import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import "./Desc.css";

function Desc({ displayError}) {
  const [selectedMovie, setSelectedMovie] = useState({});
  let movieID = useParams().id
  
  function getSingleMovie() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
    .then((res) => {
      if (!res.ok) {
        displayError(400);
      } else {
        return res.json();
      } 
    })
    .then((data) => setSelectedMovie(data.movie))
    .catch(err => displayError(500))
  }
  
  useEffect(() => {
    getSingleMovie();
    console.log("movieId",movieID)
    console.log("selectedMovie",selectedMovie)
  }, []);

  return (
        <div className = "movieDescDisplay">
        <div
          title={selectedMovie.title}
          className="displayedMovie"
          style={{ backgroundImage: `url(${selectedMovie.poster_path})` }}
          id={selectedMovie.id}
        ></div>
        <div className = "movieDesc" style = {{backgroundImage: `url(${selectedMovie.backdrop_path})`}}>
          <h2>{selectedMovie.title}</h2>
          <p>{selectedMovie.tagline}</p>
          <h3>Release Date: {selectedMovie.release_date}</h3>
          <p>Overview: {selectedMovie.overview}</p>
          <p>Runtime: {selectedMovie.runtime} Minutes</p>
          <p>Rating: {selectedMovie.average_rating}/10</p>
          <Link to = "/"> <button className = "backButton">Back</button></Link>
        </div>
    </div>
  );
}

export default Desc;
