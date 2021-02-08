import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {currentMovie, moviesList} = props;

  return <Main
    currentMovie = {currentMovie}
    moviesList = {moviesList}
  />;
};

App.propTypes = {
  currentMovie: PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "preview_image": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
  }),
  moviesList: PropTypes.object
};

export default App;
