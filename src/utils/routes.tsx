import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Pokemon from '../pages/Pokemon/index';
import NoMatch from '../pages/NoMatch/index';
import Random from '../pages/Random/index';

const Search = () => (
  <span>Search</span>
);

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/random">
      <Random />
    </Route>
    <Route path="/pokemon/:number">
      <Pokemon />
    </Route>
    <Route path="/search">
      <Search />
    </Route>
    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
);

export default Routes;
