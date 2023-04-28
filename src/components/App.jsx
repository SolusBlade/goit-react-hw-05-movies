import { Outlet, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { getMovieTrailerapi, getMoviesGenreListapi } from 'services/moviesApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MovieModal from './MovieModal/MovieModal';

const PersonDetailsPage = lazy(() =>
  import('../pages/PersonDetailsPage/PersonDetailsPage')
);
const GenresPage = lazy(() => import('../pages/GenresPage/GenresPage'));
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
  const [genres, setGenres] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    getMoviesGenreListapi().then(r => {
      setGenres(r.genres);
    });
  }, []);

  const hendleOpenModal = useCallback(id => {
    getMovieTrailerapi(id).then(r => {
      if (
        r.results.length === 0 ||
        !r.results.find(movie => movie.name.toLowerCase().includes('trailer'))
          ?.key
      ) {
        Notify.failure('Trailer not found', {
          timeout: 2000,
        });
        return;
      }
      setModalData(
        r.results.find(movie => movie.name.toLowerCase().includes('trailer'))
          ?.key
      );
    });
  }, []);

  const hendleCloseModal = () => {
    setModalData(null);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <HomePage genres={genres} hendleOpenModal={hendleOpenModal} />
            }
          />
          <Route
            path="/movies"
            element={
              <MoviesSearchPage
                genres={genres}
                hendleOpenModal={hendleOpenModal}
              />
            }
          />

          <Route
            path="/movies/:movieId"
            element={<MoviesDetailsPage hendleOpenModal={hendleOpenModal} />}
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
          <Route
            path="/person/:personId"
            element={
              <PersonDetailsPage
                genres={genres}
                hendleOpenModal={hendleOpenModal}
              />
            }
          />
          <Route
            path="/genres/:genreId"
            element={
              <GenresPage genres={genres} hendleOpenModal={hendleOpenModal} />
            }
          />
        </Route>
      </Routes>
      {modalData && (
        <MovieModal modalData={modalData} closeModal={hendleCloseModal} />
      )}
    </>
  );
};

export default App;
