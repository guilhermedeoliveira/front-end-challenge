import styled from 'styled-components';

import styles from '../Style';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 13em;
  height: 5em;
  background-color: transparent;
`;

export const ContainerLogoGrandMotors = styled.div`
  width: 23%;
`;

export const ContainerLogoToyota = styled.div``;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 55%;
    
  .Select-placeholder {
    color: ${styles.colors.white} !important;
  }

  .Select-arrow-zone {
    color: ${styles.colors.white} !important;
  }

  input {
    color: ${styles.colors.white} !important;
  }

  span {
    font-size: ${styles.fonts.fontSizeSmall}px;
    font-weight: ${styles.weights.fontWeightThin};
    color: ${styles.colors.white} !important;
  }
`;

export const Image = styled.img.attrs({
  src: props => props.image,
  alt: props => props.alt
})`
  transform: scale(${props => props.scale}, ${props => props.scale});
`;

export const Services = styled.p`
  position: relative;
  top: -0.2em;
  cursor: pointer;
  font-size: ${styles.fonts.fontSizeSmall}px;
  font-weight: ${styles.weights.fontWeightThin};
  color: ${styles.colors.white};
  margin-bottom: 0;
`;
