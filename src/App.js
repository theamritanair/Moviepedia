import React from 'react';
import './App.css';
import SearchMovies from "./components/SearchMovies"

function App() {
  return (
    <div className="container">
      <h1 className="title">Moviepedia</h1>
      <SearchMovies/>
    </div>
  );
}

export default App;
