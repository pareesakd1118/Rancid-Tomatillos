import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [ movies, setMovies ] = useState([])

  function getMovies() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(res => {
      if (!res.ok) {
        console.log("error")
      } else {
        return res.json()
      }
    })
    .then(data => setMovies(data.movies))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <React.Fragment>
      <Nav />
      <Main 
      movieData={movies}/>
    </React.Fragment>
  );
}
/*
 <React.Fragment>
        {!selectedMovie ? (
      <Main 
      movieData={movieData.movies}/>
      ) : (
        <DisplayDesc/> )}
      </React.Fragment>
*/
export default App;
