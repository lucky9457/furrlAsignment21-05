import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const BanneritemContainer = styled.h1`
  background-image: url(${props => props.bacsrc});
  height: 22vh;
  width: 100%;
  background-size: cover;
  color: #0070c1;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;
  transition: 2s ease-in;
  image-rendering: smooth;
`
