import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = () => (
  <span>aaa</span>
);

const Random = () => (
  <span>aaa</span>
);

const Pokemon = () => (
  <span>aaa</span>
);

const Search = () => (
  <span>aaa</span>
);

const NoMatch = () => (
  <span>aaa</span>
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
