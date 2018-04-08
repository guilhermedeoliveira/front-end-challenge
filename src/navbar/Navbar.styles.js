import styled from 'styled-components';

import styles from '../Style';

import grandMotors from '../assets/images/logo-grand-motors.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid red;
  background-color: gray;
`;

// transform: scale(0.5,0.5);
export const ImageGrandMotors = styled.img.attrs({
  src: grandMotors
})`
  transform: scale(0.85, 0.85);
`;

export const Services = styled.p`
  cursor: pointer;
  color: ${styles.colors.white};
`;

// export const Dropdown = styled.select.attrs({
export const Dropdown = styled.select``;