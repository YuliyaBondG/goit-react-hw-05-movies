import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
    });
  }, []);

  return (
    <main>
      <h2 className={css.hometitle}>Trending today</h2>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
