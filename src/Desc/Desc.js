import { useEffect, useState } from "react";
import "./Desc.css";
import React from "react";

function Desc({ movie , displayHomePage}) {

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
            <p>{movie.tagline}</p>
            <h3>Release Date: {movie.release_date}</h3>
            <p>Overview: {movie.overview}</p>
            <p>Runtime: {movie.runtime} Minutes</p>
            <p>Rating: {movie.average_rating}/10</p>
            <button className = "backButton" onClick={displayHomePage}>Back</button>

        </div>
    </div>
    </main>
  );
}

export default Desc;
