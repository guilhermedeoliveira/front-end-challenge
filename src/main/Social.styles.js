import styled from 'styled-components';

import styles from '../Style';

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 1.65em;
  margin-right: 0.5em;
`;

export const ItemSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${styles.colors.colorFacebook};
  padding-top: 0;
  padding: 0.3em 0.4em;
`;

export const TextSocial = styled.p`
  position: relative;
  top: -0.85em;
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeSmall}px;
  font-weight: ${styles.weights.fontWeightSemiBold};
  margin-left: 0.5em;
`;

export const ItemCounting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.colors.white};
  padding: 0.5em;
`;

export const Counting = styled.p`
  font-size: ${styles.fonts.fontSizeSmall}px;
`;
