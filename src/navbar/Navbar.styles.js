import styled from 'styled-components';

import grandMotors from '../assets/images/grand-motors.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
  background-color: gray;
`;

// transform: scale(0.5,0.5);
export const ImageGrandMotors = styled.img.attrs({ src: grandMotors })`

`;

export const Services = styled.p`
  cursor: pointer;
`;

// export const Dropdown = styled.select.attrs({
export const Dropdown = styled.select``;