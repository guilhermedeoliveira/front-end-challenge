import styled from 'styled-components';

import grandMotors from '../assets/images/auto-force-logo.png';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  background-color: gray;
  margin: 80px 0;
  border: 2px solid red;
`;

export const ImageCarousel = styled.img.attrs({
  src: props => props.image,
  alt: 'Grand Motors Logo'
})`
  transform: scale(0.8, 0.8);
`;