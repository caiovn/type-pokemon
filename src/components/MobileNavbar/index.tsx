import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRandom } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Icon } from '../../media/PokemonIcon.svg';

import { NavbarStyle, LinkContainer } from './styles';

const MobileNavbar = () => (
  <NavbarStyle>
    <LinkContainer>
      <Link to="/">
        <Icon width="16" height="16" />
        Pokémons
      </Link>
    </LinkContainer>

    <LinkContainer>
      <Link to="/search">
        <FontAwesomeIcon icon={faSearch} color="white" />
        Search
      </Link>
    </LinkContainer>

    <LinkContainer>
      <Link to="/random">
        <FontAwesomeIcon icon={faRandom} color="white" />
        Random
      </Link>
    </LinkContainer>
  </NavbarStyle>
);

export default MobileNavbar;
