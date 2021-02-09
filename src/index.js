import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {CURRENT_MOVIE, MOVIES} from './mock/movies.js';

ReactDOM.render(
    <App
      currentMovie = {CURRENT_MOVIE}
      movies = {MOVIES}
    />,
    document.querySelector(`#root`)
);
