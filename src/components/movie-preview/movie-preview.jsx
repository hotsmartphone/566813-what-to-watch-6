import React from 'react';
import PropTypes from 'prop-types';

const MoviePreview = ({movieName, moviePreviewImg}) => {

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={`img/` + moviePreviewImg} alt={movieName} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{movieName}</a>
      </h3>
    </article>
  );
};

MoviePreview.propTypes = {
  movieName: PropTypes.string.isRequired,
  moviePreviewImg: PropTypes.string.isRequired
};

export default MoviePreview;
