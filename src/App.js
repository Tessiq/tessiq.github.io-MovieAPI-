import { useState, useEffect } from 'react';
import Movielist from './MovieList';
import Searchmovie from './search';
import './App.css'
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchmovie, setSearchmovie] = useState('');
  const Requestmovie = async () => {
    const url = `http://www.omdbapi.com/?apikey=8da18cef&s=${searchmovie}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  }
  useEffect(() => {
    Requestmovie(searchmovie);
  }, [searchmovie]);
  return (
    <div>
      <div className="App">
        <Searchmovie searchmovie={searchmovie} setSearchmovie={setSearchmovie} />
        <Movielist movies={movies} />
      </div>
    </div>
  );
}
export default App
