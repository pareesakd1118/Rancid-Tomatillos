import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import { useState, useEffect } from "react";
import React from "react";
import Desc from "../Desc/Desc";
import Error from "../Error/Error";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearchResults] = useState([]);
  const navigate = useNavigate();

  function getMovies() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((res) => {
        if (!res.ok) {
          navigate("/error/400");
        } else {
          return res.json();
        }
      })
      .then((data) => setMovies(data.movies))
      .catch((err) => navigate("/error/500"));
  }

  function getSearchResults(searchValue) {
    let searchResults = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchValue)
    });
    if(searchResults.length > 0 ){
      setSearchResults(searchResults)
      navigate(`/search/${searchValue}`)
    }else{
      navigate(`/search/noresults/${searchValue}`)
    }
  }

  function getSearchInput(searchInput) {
    if (searchInput.target.value) {
      getSearchResults(searchInput.target.value.toLowerCase());
    } else {
      navigate("/");
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        <Nav getSearchInput={getSearchInput} />
        <Routes>
          <Route path="/" element={<Main movieData={movies} />} />
          <Route path="/:id" element={<Desc />} />
          <Route path="/error/:response" element={<Error />} />
          <Route path="/search/:input" element={<Main movieData={search} />} />
          <Route path="/search/noresults/:input" element={<p>No Results Found</p>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
/*
           <Route path="/search/:input" element = {<Main movieData={}/>} />
*/
