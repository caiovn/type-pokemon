import React from 'react';

import { Container, Title, Image } from './styles';

import ErrorApiImg from '../../media/errorMissingno.webp';
import NotConnectApiImg from '../../media/rotomConnection.webp';

interface Props {
    error: errorProps;
}

interface errorProps {
    status: number;
    statusText: string;
}

const ErrorApi = ({ error }: Props) => (
  <>
    {error.status !== undefined ? (
      <Container>
        <Title>{`ERROR ${error.status}`}</Title>

        <Image src={ErrorApiImg} alt="Missingno" />

        <Title>{error.statusText.toUpperCase()}</Title>
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
