import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: grid;

  @media (max-width: 576px) {
    text-align: center;
    position: absolute;
    top: 20%;
  }
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-family: "pokemon-font", monospace;
  font-weight: normal;
  font-size: 60px;

  @media (max-width: 576px) {
    font-size: 30px;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    font-size: 45px;
  }
`;

export const Image = styled.img`
  margin: 0 auto;

  @media (max-width: 576px) {
    width: 98%;
  }

  @media (min-width: 577px) and (max-width: 992px) {
    width: 98%;
  }
`;
