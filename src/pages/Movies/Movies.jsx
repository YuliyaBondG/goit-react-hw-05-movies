import { getMoviesByQuery } from 'services/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
    setQuery('');
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    getMoviesByQuery(query).then(setMovies);
  }, [searchParams]);
  return (
    <>
      <main>
        <form className={css.moviesForm} onSubmit={handleSubmit}>
          <input
            className={css.moviesInput}
            autoComplete="off"
            type="text"
            name="movie"
            placeholder="Enter the movie..."
            onChange={handleChange}
            value={query}
          />
          <button className={css.moviesBtn} type="submit">
            Search movie
          </button>
        </form>
      </main>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
