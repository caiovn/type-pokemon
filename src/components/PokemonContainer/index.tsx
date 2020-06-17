import React from 'react';

import { Link } from 'react-router-dom';

import {
  Image, Title, Container, Number, Text, GridContainer, Paragraph,
} from './styles';

interface Props {
    pokemon: Array<pokemonProp>;
}

interface pokemonProp {
    info: infoProps;
}

interface infoProps {
    name: string;
    num: number;
    img: string;
    type: Array<string>;
    prev_evolution: Array<prevEvolutionProps>;
    next_evolution: Array<nextEvolutionProps>;
}

interface prevEvolutionProps {
    name: string;
    num: number;
}

interface nextEvolutionProps {
    name: string;
    num: number;
}

const PokemonContainer = ({ pokemon }: Props) => (
  pokemon.map((index) => (
    <GridContainer key={index.info.num}>
      <Container>
        <Image src={index.info.img} />
      </Container>

      <Container>
        <Title>
          {index.info.name}
          <span>
            {`#${index.info.num}`}
          </span>
        </Title>

        <Paragraph>
          {
                index.info.type.map((type, indice) => (
                  <Text key={type}>
                    {!indice ? `${'Type: '}` : ', '}
                    {type}
                  </Text>
                ))
              }
        </Paragraph>

        <Paragraph>
          {
                index.info.prev_evolution
                && index.info.prev_evolution.map((pEvolution, indice) => (
                  <Text key={pEvolution.num}>
                    {!indice ? `${'Previous evolution: '}` : ', '}
                    {pEvolution.name}
                    <Link to={`/pokemon/${pEvolution.num}`}>
                      <Number>{`#${pEvolution.num}`}</Number>
                    </Link>
                  </Text>
                ))
              }
        </Paragraph>

        <Paragraph>
          {
                index.info.next_evolution
                && index.info.next_evolution.map((nEvolution, indice) => (
                  <Text key={nEvolution.num}>
                    {!indice ? `${'Previous evolution: '}` : ', '}
                    {nEvolution.name}
                    <Link to={`/pokemon/${nEvolution.num}`}>
                      <Number>{`#${nEvolution.num}`}</Number>
                    </Link>
                  </Text>
                ))
              }
        </Paragraph>
      </Container>
    </GridContainer>
  ))
);

export default PokemonContainer;
