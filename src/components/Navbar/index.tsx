import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarStyle } from './styles';

const Navbar = () => (
  <NavbarStyle>
    <Link to="/">Pokémon</Link>
    <Link to="/search">Search</Link>
    <Link to="/random">Random</Link>
  </NavbarStyle>
);

export default Navbar;
