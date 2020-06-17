import React from 'react';

import { Container } from './styles';
import Card from '../Card/index';

interface Props {
    data: Array<dataProp>;
}

interface dataProp {
    info: infoProps;
}

interface infoProps {
    name: string;
    num: number;
    img: string;
}

const CardList = ({ data }: Props) => (
  <Container>
    {
        data.map((index) => (
          <Card
            key={index.info.num}
            image={index.info.img}
            name={index.info.name}
            number={index.info.num}
          />
        ))
      }
  </Container>
);
export default CardList;
