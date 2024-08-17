import React from "react";

const MovieCard=({movie,Year})=>{
    return(
        <>
         <div className="movie">
                <div>
                  <p>{movie.Year}</p>
                </div>

                <div>
                  <img src={movie.poster_path!=="/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"?movie.poster_path:"https//via.placeholder.com/400"}
                   alt={movie.title} 
                   />
                </div>

                <div>
                  <span>{movie.Type}</span>
                  <h3>{movie.title}</h3>
                </div>

              </div>
            
        </>
    );
};
export default MovieCard;