import React from 'react'
const Searchmovie = (props) => {
    return (
        <div className="search">
            <p>Search a Movie</p>
            <input
                className="btn btn-primary btn-lg"
                value={props.value}
                onChange={(event) => props.setSearchmovie(event.target.value)}
                placeholder="Search movie"
            >
            </input>
        </div>
    )
}
export default Searchmovie;