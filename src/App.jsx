import { useState } from 'react';
import Search from './components/Search.jsx';
import Spinner from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';
import { useMovies } from './useMovies';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    movieList,
    isLoading,
    errorMessage,
    trendingMovies
  } = useMovies(searchTerm);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src='/hero.png' alt='Hero Banner' />
          <h1>Find <span className='text-gradient'>Movie</span> You'll Enjoy Without the Hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className='trending'>
            <h2 className='text-gradient2'>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url || '/no-movie.png'} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className='all-movies'>
          <h2 className='text-gradient2'>All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
