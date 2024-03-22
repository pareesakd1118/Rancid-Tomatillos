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
        <React.Fragment className = "movieDescDisplay">
        <div
          title={movie.title}
          className="movie"
          style={{ backgroundImage: `url(${movie.poster_path})` }}
          id={movie.id}
        ></div>
        <div className = "movieDesc" style = {{backgroundImage: `url(${movie.backdrop_path})`}}>
            <h2>{movie.title}</h2>
            <h3>Release Date{movie.release_date}</h3>
            <p>{movie.overview}</p>
            <p>Runtime{movie.runtime}</p>
            <p>{movie.tagline}</p>
            <p>{movie.average_rating}</p>
            <button onClick={displayHomePage}>Back</button>

        </div>
        </React.Fragment>
    </main>
  );
}

export default Desc;
