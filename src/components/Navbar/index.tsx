import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarStyle } from './styles';

export interface Props {
    paths: Array<JsonProps>;
}

export interface JsonProps {
    link: string;
    title: string;
}

const Navbar = ({ paths }: Props) => (
  <NavbarStyle>
    {paths.map((index) => (
      <Link to={index.link} key={index.title}>{index.title}</Link>
    ))}
  </NavbarStyle>
);

export default Navbar;
