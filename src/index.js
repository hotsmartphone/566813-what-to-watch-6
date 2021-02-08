import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CURRENT_MOVIE, MOVIES_LIST, GENRES} from './mock/movies.js';

ReactDOM.render(
    <App
      currentMovie = {CURRENT_MOVIE}
      moviesList = {MOVIES_LIST}
      genres = {GENRES}
    />,
    document.querySelector(`#root`)
);
