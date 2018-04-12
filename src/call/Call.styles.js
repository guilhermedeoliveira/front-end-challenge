import styled, { css } from 'styled-components';

import styles from '../Style';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 6em;
  background-color: ${styles.colors.wine};
`;

export const ContainerCall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1.5em 3.5em;
  text-align: center;
  ${props => props.isBordered && css`
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  `};
`;

ContainerCall.defaultProps = {
  isBordered: false
};

export const Header = styled.h2`
  color: ${styles.colors.white};  
  font-size: ${styles.fonts.fontSizeH3}px;
  font-weight: ${styles.weights.fontWeightThin};
  margin: 0.5em 0;
`;

export const Main = styled.h1`
  color: ${styles.colors.promotion};
  font-size: ${styles.fonts.fontSizeH1}px;
  font-weight: ${styles.weights.fontWeightLight};
  margin: 0;
`;

export const Text = styled.p`
  color: ${styles.colors.grayLight};
  font-weight: ${styles.weights.fontWeightLight};
  margin: 0.5em 0;
`;
