import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import "./MovieDetails.css";


const MovieDetails=()=>{
    const {id} = useParams();
    const [movie,setmovie]= useState(null);

    useEffect(()=>{
        const fetchMovieDetails=async()=>{
            try{
                const response=await fetch(`https://api.themoviedb.org/3/movie/${id}popular?page=1&api_key=732dfe94c237f44327af913ebba97825`);
                const data=await response.json();
                setmovie(data);
            }catch(error){
                console.error("failed fto fetch movie details:",error);
            }
        };
        fetchMovieDetails();
    },[id]);

    if(!movie){
        return <div>Loading...</div>
    }

    return(
        <div className="movie-detail">
            <h2 className="movie-title">{movie.title}</h2>
            <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title} />
            <div className="movie-info">
            <p className="movie-overview">{movie.overview}</p>
            <p><strong>Release Date:</strong>{movie.release_date}</p>
            <p><strong>Rating:</strong>{movie.vote_average}</p>
        </div>
      </div>
    );
};

export default MovieDetails;