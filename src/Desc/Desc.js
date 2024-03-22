import { useEffect, useState } from "react";
import "./Desc.css";
import React from "react";

function Desc({ movie , displayHomePage}) {
  /*
  function showSelectedMovie() {
    return (
      <React.Fragment>
        <div title={movie.title} className="movie" style={{ backgroundImage: `url(${movie.poster_path})` }} id={movie.id}>
        </div>
        <div>DESCRIPTION DIV</div>
      </React.Fragment>
    )
}\*/

  return (
    <main>
        <div className = "movieDescDisplay">
        <div
          title={movie.title}
          className="displayedMovie"
          style={{ backgroundImage: `url(${movie.poster_path})` }}
          id={movie.id}
        ></div>
        <div className = "movieDesc" style = {{backgroundImage: `url(${movie.backdrop_path})`}}>
            <h2>{movie.title}</h2>
            <h3>Release Date: {movie.release_date}</h3>
            <p>{movie.overview}</p>
            <p>Runtime: {movie.runtime} Minutes</p>
            <p>{movie.tagline}</p>
            <p>Rating: {movie.average_rating}/10</p>
            <button onClick={displayHomePage}>Back</button>

        </div>
    </div>
    </main>
  );
}

export default Desc;
