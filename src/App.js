import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
   
    filterMovies();
  }, [searchQuery, moviesList]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1&api_key=732dfe94c237f44327af913ebba97825");
      const data = await response.json();
      setMoviesList(data.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const filterMovies = () => {
    if (!searchQuery) {
      setFilteredMovies(moviesList);
    } else {
      const filtered = moviesList.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route 
        path="/"
        element={
    <div className="app">
      <h1>OK MOVIES</h1>
      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      {
        filteredMovies.length > 0 ? (
          <div className="container">
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h>No movies found</h2>
          </div>
        )}
      
    </div>
        }
        />
        <Route path="/movie/:id"
        element={<MovieDetails />} />
        </Routes>
        </Router>
  );
};  

export default App;
