import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Detail from 'pages/Detail/Detail';

Routes.propTypes = {};

function Routes(props) {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:id" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
