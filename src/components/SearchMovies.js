import React, {useState} from "react";
import MovieCard from "./MovieCard"

export default function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=aa22aafdea6f4605a80abc6e3a1da51d&language=en-US&query=${query}&page=1&include_adult=false`; 
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results)
        setMovies(data.results);
    }
    return(
        <div>
        
        <form className="form" onSubmit={searchMovies}>

        <label className="label" htmlFor="query">Movie Name </label>
        <input className="input" type="text" placeholder="ex. Jurrasic World" value={query} onChange={(e) => setQuery(e.target.value)}></input>
 
        <button className="button" type="submit">Search</button>
        </form>

        <div className="cardList">
            {movies.filter(movie => movie.poster_path).map(movie => 
                    <MovieCard movie={movie} key={movie.id}/>
            )}

        </div>
        
        </div>

        
    )
} 