import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard=({movie})=>{
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(`/movie/${movie.id}`);
  };
    return(
        <>
         <div className="movie" onClick={handleClick}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
          alt={movie.title} />
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                </div>

                
                
                  
                </div>

              
            
        </>
    );
};
export default MovieCard;