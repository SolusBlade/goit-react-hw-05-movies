import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ProgressBar } from 'react-loader-spinner';

const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesSearchPage = lazy(() =>
  import('../pages/MoviesSearchPage/MoviesSearchPage')
);
const MoviesDetailsPage = lazy(() =>
  import('../pages/MoviesDetailsPage/MoviesDetailsPage')
);
const MainNav = lazy(() => import('./MainNav/MainNav'));

const SharedLayout = () => {
  return (
    <>
      <MainNav />
      <Suspense
        fallback={
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper loader"
            borderColor="#b72f2b"
            barColor="#b72f2b"
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MoviesSearchPage />}
          ></Route>

          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MoviesDetailsPage />}
          >
            <Route
              path="cast"
              element={
                <Suspense
                  fallback={
                    <ProgressBar
                      height="80"
                      width="80"
                      ariaLabel="progress-bar-loading"
                      wrapperStyle={{}}
                      wrapperClass="progress-bar-wrapper loader"
                      borderColor="#b72f2b"
                      barColor="#b72f2b"
                    />
                  }
                >
                  <MovieCast />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense
                  fallback={
                    <ProgressBar
                      height="80"
                      width="80"
                      ariaLabel="progress-bar-loading"
                      wrapperStyle={{}}
                      wrapperClass="progress-bar-wrapper loader"
                      borderColor="#b72f2b"
                      barColor="#b72f2b"
                    />
                  }
                >
                  <MovieReview />
                </Suspense>

              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
