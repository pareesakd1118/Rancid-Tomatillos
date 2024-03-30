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
  const [sort, setSort] = useState([]);

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
      return movie.title.toLowerCase().includes(searchValue);
    });
    if (searchResults.length > 0) {
      setSearchResults(searchResults);
      navigate(`/search/${searchValue}`);
    } else {
      navigate(`/search/noresults/${searchValue}`);
    }
  }

  function getSearchInput(searchInput) {
    if (searchInput.target.value) {
      getSearchResults(searchInput.target.value.toLowerCase());
    } else {
      navigate("/");
    }
  }

  function sortMovies(event) {
    let value = event.target.value;
    let sortedMovies

    if (value === "highToLow") {
      sortedMovies = movies.toSorted((a, b) => {
        return b.average_rating - a.average_rating;
      });
      navigate(`/filter/${value}`);
      setSort(sortedMovies);
    } else if (value === "lowToHigh") {
      sortedMovies = movies.toSorted((a, b) => {
        return a.average_rating - b.average_rating;
      });
      setSort(sortedMovies);
      navigate(`/filter/${value}`);
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
        <Nav getSearchInput={getSearchInput} sortMovies={sortMovies}/>
        <Routes>
          <Route path="/" element={<Main movieData={movies} />} />
          <Route path="/:id" element={<Desc />} />
          <Route path="/error/:response" element={<Error />} />
          <Route path="/search/:input" element={<Main movieData={search} />} />
          <Route
            path="/search/noresults/:input"
            element={<h3 className="no-match">No movies match your query 😢</h3>}
          />
          <Route path="/filter/:filter" element={<Main movieData={sort} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

