import React from "react";

const MovieCard=(props)=>{
  const {movie}=props;
  const{title,poster_path,year}=movie;
    return(
        <>
         <div className="movie">
                <div>
                  <p>{year}</p>
                </div>

                <div>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="title" />
                
                
                </div>

                <div>
                
                  <h3>{title}</h3>
                </div>

              </div>
            
        </>
    );
};
export default MovieCard;