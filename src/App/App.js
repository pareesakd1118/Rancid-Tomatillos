import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import { useState, useEffect } from "react";
import React from "react";
import Desc from "../Desc/Desc";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isMovieSelected, setIsMovieSelected] = useState(false);
  const [isError, setIsError] = useState(false)
  const [responseLevel, setResponseLevel] = useState(undefined)
  
  function getMovies() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          displayError(400);
        } else {
          return res.json();
        }
      })
      .then((data) => setMovies(data.movies))
      .catch(err => displayError(500))
  }

  useEffect(() => {
    getMovies();
  }, []);

  function getSingleMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
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

  function showDesc(evt) {
    getSingleMovie(evt.target.id);
    setIsMovieSelected(true);
  }

  function displayHomePage() {
    setIsMovieSelected(false)
    setSelectedMovie({})
  }

  function displayError(responseLevel) {
    setIsError(true)
    setResponseLevel(responseLevel)
  }
  
  return (
    <React.Fragment>
      {isError ? (<p className="error">ERROR: {responseLevel} </p>) : (
        <React.Fragment>
          <Nav />
          <React.Fragment>
          {!isMovieSelected ? (
            <Main showDesc={showDesc} movieData={movies} />
            ) : (
            <Desc movie={selectedMovie} displayHomePage={displayHomePage}/>
          )}
          </React.Fragment>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
