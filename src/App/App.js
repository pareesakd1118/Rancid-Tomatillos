import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import { useState, useEffect } from "react";
import React from "react";
import Desc from "../Desc/Desc";
import { Routes, Route,} from "react-router-dom"
function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isMovieSelected, setIsMovieSelected] = useState(false);
  const [responseLevel, setResponseLevel] = useState(null)
  
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
    setResponseLevel(responseLevel)
  }
  
  return (
    <>
      {responseLevel ? (<p className="error">ERROR: {responseLevel} Restart Server</p>) : (
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Main showDesc={showDesc} movieData={movies} />}/>
            <Route path="/:id" element={<Desc displayError={displayError}/>} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
