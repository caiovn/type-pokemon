import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { LoadingContainer } from './styles';

const Loading = () => (
  <LoadingContainer>
    <CircularProgress color="secondary" />
  </LoadingContainer>
);

export default Loading;
