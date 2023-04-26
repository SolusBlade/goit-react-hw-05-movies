import axios from "axios";

// ?country=us&=
const API_KEY = '571e3bd2c39f71ab899b0219901320b3';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrandingMoviesapi = (page) => {
  return axios
    .get('/trending/movie/day', {
      params: {
        page,
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieByIdapi = (id) => {
  return axios
    .get(`/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieCastapi = (id) => {
  return axios
    .get(`/movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getMovieReviewapi = (id) => {
  return axios
    .get(`/movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getSearchedMovieapi = (query, page=1) => {
  return axios
    .get(`/search/movie`, {
      params: {
        page,
        query,
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};
//api.themoviedb.org/3/movie/868759/videos?api_key=

export const getMovieTrailerapi = id => {
  return axios
    .get(`/movie/${id}/videos`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=42ee593af8484a5a82756cb35b09ccd6
// export const getSearchedNewsApi = (q, page = 1) => {
//   return axios
//     .get("/everything", {
//       params: {
//         q,
//         page,
//         pageSize: 10,
//         apiKey: API_KEY,
//       },
//     })
//     .then((res) => res.data);
// };
