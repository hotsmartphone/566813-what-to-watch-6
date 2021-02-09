import React from 'react';
import PropTypes from 'prop-types';
import MoviePreview from '../movie-preview/movie-preview';


const Main = ({currentMovie, movies, genres}) => {

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={currentMovie.background_image} alt={currentMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={currentMovie.poster_image} alt={currentMovie.name + ` poster`} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentMovie.genre}</span>
                <span className="movie-card__year">{currentMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {genres.map((genre, i) => (
              <li key={genre + i} className={`catalog__genres-item` + (genre === `All genres` ? ` catalog__genres-item--active` : ``)}>
                <a href="#" className="catalog__genres-link">{genre}</a>
              </li>
            ))}
          </ul>

          <div className="catalog__movies-list">
            {Object.keys(movies).map((name, i) => (
              <MoviePreview key={name + i} movieName={name} moviePreviewImg={movies[name]} />
            ))}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  currentMovie: PropTypes.shape({
    "name": PropTypes.string.isRequired,
    "poster_image": PropTypes.string.isRequired,
    "preview_image": PropTypes.string.isRequired,
    "background_image": PropTypes.string.isRequired,
    "genre": PropTypes.string.isRequired,
    "released": PropTypes.number.isRequired,
  }),
  movies: PropTypes.object,
  genres: PropTypes.arrayOf(PropTypes.string)
};

export default Main;
