import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PageHeader from 'components/PageHeader/PageHeader';
import { category as cate } from 'api/tmdbApi';
import MovieGrid from 'components/MovieGrid/MovieGrid';

Catalog.propTypes = {};

function Catalog(props) {
  const { category } = useParams();

  console.log(category);
  return (
    <>
      <PageHeader>
        {category === cate.movie ? 'Movies' : 'TV Series'}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
}

export default Catalog;
