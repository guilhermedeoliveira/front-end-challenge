import styled from 'styled-components';

import styles from '../Style';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${styles.colors.white};
  padding: 0 10em;
  margin-bottom: 3em;
`;

export const TextMeetOurCars = styled.h1`
  align-self: center;
  margin-top: 0.5em;
  margin-bottom: 0;
  color: ${styles.colors.grayDarker};
  font-size: ${styles.fonts.fontSizeH2}px;
  font-weight: ${styles.weights.fontWeightThin};
`;

export const HrCarousel = styled.hr`
  width: 6em;
  border-width: 1px;
  color: ${styles.colors.gray};
  margin-bottom: 0;
`;

export const ContainerCarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -2em;
`;

export const ImageCarouselItem = styled.img.attrs({
  src: props => props.image,
  alt: 'Car'
})`
  transform: scale(0.8, 0.6);
`;

export const TextCarouselItem = styled.p`
  align-self: center;
  position: relative;
  top: -3em;
  margin: 0;
`;

export const Arrow = styled.div`
  width: 2em;
`;