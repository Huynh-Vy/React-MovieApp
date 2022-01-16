import apiConfig from 'api/apiConfig';
import tmdbApi, { category } from 'api/tmdbApi';
import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MovieList.scss';

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMovieList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }

      setItems(response.results);
    };
    getList();
  }, [props.id, props.category, props.type]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={0} slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
