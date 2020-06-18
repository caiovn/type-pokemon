import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../utils/api';
import { Container } from '../sharedStyles';

import PokemonContainer from '../../components/PokemonContainer/index';
import Loading from '../../components/Loading/index';
import ErrorApi from '../../components/ErrorApi/index';

const Pokemon = () => {
  const { number } = useParams();
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/pokemon/number/${number}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [number]);
  return (
    <Container>
      {
            isLoading
              ? (<Loading />)
              : (error
                ? (<ErrorApi error={error!} />)
                : (<PokemonContainer pokemon={data} />)
              )
        }
    </Container>
  );
};

export default Pokemon;
