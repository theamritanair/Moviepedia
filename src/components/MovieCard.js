import React from 'react';

export default function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <div className="movie-top">
                <div className="movie-top-left">
                    <h3 className="card--title">{movie.title}</h3>
                    <div>
                        <div className="movie-header">Release Date</div>
                        <small className="movie-release">{movie.release_date}</small>
                    </div>
                    <div>
                        <div className="movie-header">Rating</div>
                        <small className="movie-rating">{movie.vote_average}</small>
                    </div>
                </div>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={movie.title + ' poster image'}/>
            </div>

            <div className="movie-description">
                <p className="card--desc">{movie.overview}</p>
            </div>


        </div>
    )
}