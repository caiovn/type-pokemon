import React from 'react';

import { Link } from 'react-router-dom';

import {
  Content, Img, Container, Title, Number,
} from './styles';

interface Props {
  name: string;
  number: number;
  image: string;
}

const Card = ({ name, number, image }: Props) => (
  <Content>
    <Link to={`/pokemon/${number}`}>
      <Img src={image} alt={name} />
      <Container>
        <Title>{name}</Title>
        <Number>{`#${number}`}</Number>
      </Container>
    </Link>
  </Content>
);

export default Card;
