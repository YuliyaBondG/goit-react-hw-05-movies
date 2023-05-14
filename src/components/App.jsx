import { Routes, Route, Navigate } from 'react-router-dom';
//import Home from 'pages/Home/Home';
//import Movies from 'pages/Movies/Movies';
//import MoviesDetails from 'pages/MoviesDetail/MoviesDetails';
//import { Cast } from './Cast/Cast';
//import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MoviesDetails = lazy(() => import('../pages/MoviesDetail/MoviesDetails'));
const Cast = lazy(() =>
  import('./Cast/Cast').then(module => {
    console.log(module);
    return {
      ...module,
      default: module.Cast,
    };
  })
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews').then(module => {
    console.log(module);
    return {
      ...module,
      default: module.Reviews,
    };
  })
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
