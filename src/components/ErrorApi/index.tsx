import React from 'react';

import { Container, Title, Image } from './styles';

import ErrorApiImg from '../../media/errorMissingno.webp';
import NotConnectApiImg from '../../media/rotomConnection.webp';

interface Props {
    error: errorProp;
}

interface errorProp {
    response: responseProps;
}

interface responseProps {
  status: number;
  statusText: string;
}

const ErrorApi = ({ error }: Props) => (
  <>
    {error.response !== undefined ? (
      <Container>
        <Title>{`ERROR ${error.response.status}`}</Title>

        <Image src={ErrorApiImg} alt="Missingno" />

        <Title>{error.response.statusText.toUpperCase()}</Title>
      </Container>
    ) : (
      <Container>
        <Title>AN ERROR HAS OCURRED</Title>

        <Image src={NotConnectApiImg} alt="Rotom" />

        <Title>PLEASE, TRY AGAIN</Title>
      </Container>
    )}
  </>
);

export default ErrorApi;
