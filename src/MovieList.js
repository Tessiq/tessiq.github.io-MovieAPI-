import React from 'react'
const Movielist = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => {
                return (
                    <div class="Movie">
                        <img src={movie.Poster} alt="movies" />
                        <h3>{movie.Title}</h3>
                    </div>
                )
            })
            }
        </>
    )
}
export default Movielist;