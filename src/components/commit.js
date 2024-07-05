export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const requestMovies = () => ({type: REQUEST_MOVIES});
export const receiveMovies = data => ({type: RECEIVE_MOVIES, data});