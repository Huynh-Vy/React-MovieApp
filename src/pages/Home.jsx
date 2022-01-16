import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeroSlide from 'components/HeroSlide/HeroSlide';
import Header from 'components/Header/Header';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { OutlineButton } from 'components/Button/Button';
import MovieList from 'components/MoveList/MovieList';
import { category, movieType, tvType } from 'api/tmdbApi';

Home.propTypes = {};

function Home(props) {
  return (
    <div className="hero-slide">
      <HeroSlide />
      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending Movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View More</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.popular} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated Movies</h2>
          <Link to="/movie">
            <OutlineButton className="small">View More</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending TV</h2>
          <Link to="/tv">
            <OutlineButton className="small">View More</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.popular} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top Rated TV</h2>
          <Link to="/tv">
            <OutlineButton className="small">View More</OutlineButton>
          </Link>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>
    </div>
  );
}

export default Home;
