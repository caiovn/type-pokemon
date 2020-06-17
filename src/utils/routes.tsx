import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home/index';

const Random = () => (
  <span>Random</span>
);

const Pokemon = () => (
  <span>Pokemon</span>
);

const Search = () => (
  <span>Search</span>
);

const NoMatch = () => (
  <span>NoMatch</span>
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
