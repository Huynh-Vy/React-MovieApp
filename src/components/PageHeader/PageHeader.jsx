import React from 'react';
import PropTypes from 'prop-types';
import './PageHeader.scss';
import bg from 'assets/footer-bg.jpg';

function PageHeader(props) {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
}

PageHeader.propTypes = {};

export default PageHeader;