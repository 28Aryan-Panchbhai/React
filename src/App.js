import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

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
    <div className="app">
      <h1>Hello Movies</h1>
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
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
};

export default App;
