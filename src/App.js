import React, { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./Search.svg";
import MovieCard from "./MovieCard";


const movies1 = {
  "id": 1022789,
  "popularity": 3179.049,
  "poster_path": "/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg",
  "Year": "2024-06-11",
  "title": "Inside Out 2",

};

const App = () => {
  const [movieslist, setMovieslist] = useState([]);
  const [searchterm,setsearchterm]=useState("");
  useEffect(() => {
    fetchdata();
  }, [searchterm]);

  const fetchdata = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?page=1&api_key=732dfe94c237f44327af913ebba97825");
    


    const data = await response.json();
    setMovieslist(data.results);
    console.log(data.results);
  };



  return (
    <>
      <div className="app">
        <h1>Hello Movies</h1>
        <div className="search">
          <input
            placeholder="Search Movies"
            value={searchterm}
            onChange={(e) =>setsearchterm(e.target.value)}
          />

          <img src={SearchIcon}
            alt="search" 
          onclick={() =>fetchdata(searchterm)} />
        </div>
        {
          movieslist?.length > 0
            ? (
              <div className="container">
                {movieslist.map((movie) => (
                  <MovieCard movie={movie} />

                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>no movies found</h2>
              </div>
            )
        }



      </div>

    </>
  );

};
export default App;