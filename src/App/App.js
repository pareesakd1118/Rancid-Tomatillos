import "./App.css";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import React from "react";
import movieData from "../sample-data";

function App() {

  return (
    <React.Fragment>
      <Nav />
      <Main 
      movieData={movieData.movies}/>
    </React.Fragment>
  );
}

export default App;
