import styled from 'styled-components';

import styles from '../Style';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  background-color: ${styles.colors.colorBackgroundLight};
  padding-bottom: 1em;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding-right: 3em;
  margin-left: 1em;
`;


export const SpanOldPrice = styled.span`
  color: ${styles.colors.white};
  text-decoration: line-through;
`;

export const Model = styled.h1`
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeH1}px;
  margin-top: 0.5em;
  margin-bottom: 0;
`;

export const Cambio = styled.h3`
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeH3}px;
  margin: 0 0;
`;

export const Phrase = styled.p`
  color: ${styles.colors.white};
  font-weight: ${styles.weights.fontWeightSemiBold};
  margin-bottom: 3em;
`;

export const OldPrice = styled.h3`
  color: ${styles.colors.white};
  font-weight: ${styles.weights.normal};
  margin: 0 0;
`;

export const NewPrice = styled.h4`
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeH3}px;
  font-weight: ${styles.weights.fontWeightSemiBold};
  margin: 0 0;
`;

export const Conditions = styled.p`
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeWee}px;
`;

export const ContainerShare = styled.div`
  text-align: center;
  margin-top: 3em;
`;

export const TextLike = styled.p`
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeSmall}px;
  font-weight: ${styles.weights.fontWeightSemiBold};
`;

export const ContainerFacebook = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const TextIllustrativeImages = styled.p`
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeWee}px;
  text-align: left;
`;
