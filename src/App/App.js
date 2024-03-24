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
  
  function getMovies() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          console.log("error");
        } else {
          return res.json();
        }
      })
      .then((data) => setMovies(data.movies));
  }

  useEffect(() => {
    getMovies();
  }, []);

  function getSingleMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then((res) => {
      if (!res.ok) {
        console.log("error");
      } else {
        return res.json();
      } 
    })
    .then((data) => setSelectedMovie(data.movie))
  }


  function showDesc(evt) {
    getSingleMovie(evt.target.id);
    setIsMovieSelected(true);
  }

  function displayHomePage() {
    setIsMovieSelected(false)
    setSelectedMovie({})
  }
  
  return (
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
  );
}
/*
  <React.Fragment>
      <Nav />
      <React.Fragment>
      {!selectedMovie ? (
      <Main 
      movieData={movieData.movies}/>
      ) : (
        <DisplayDesc
      movie={selectedMovieId}
        /> )}
      </React.Fragment>
    </React.Fragment>
*/
export default App;
