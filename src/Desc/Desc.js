import { useEffect, useState } from "react";
import "./Desc.css";
import React from "react";

function Desc({ movie }) {
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
      <React.Fragment>
        <div
          title={movie.title}
          className="movie"
          style={{ backgroundImage: `url(${movie.poster_path})` }}
          id={movie.id}
        ></div>
        <div>DESCRIPTION DIV
            <button>Back</button>
        </div>
      </React.Fragment>
    </main>
  );
}

export default Desc;
