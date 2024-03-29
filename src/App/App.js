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

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Main movieData={movies} />} />
          <Route path="/:id" element={<Desc/>} />
          <Route path="/error/:response" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
