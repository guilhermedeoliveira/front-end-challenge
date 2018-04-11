import styled from 'styled-components';

import styles from '../Style';

import autoForce from '../assets/images/auto-force-logo.png';
import grandMotors from '../assets/images/logo-grand-motors-production.png';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 6em;
  background-color: ${styles.colors.grayDarker};
  padding-top: 1em;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerTopCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContainerTopCenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  right: 1.5em;
`;

export const ContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
`;

export const ContainerFooterSocial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerFooterSocialItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  width: 2em;
  height: 2em;
  margin-left: 0.5em;
`;

export const SocialLink = styled.a.attrs({
  href: props => props.link,
  target: '_blank'
})`
  color: inherit;
`;

SocialLink.defaultProps = {
  link: 'https://google.com'
}

export const TextFooter = styled.h3`
  font-size: ${styles.fonts.fontSizeSmall}px;
  font-weight: ${styles.weights.fontWeightLight};
  color: ${styles.colors.gray};
  position: relative;
  right: 2.5em;
`;

export const LogoGrandMotors = styled.img.attrs({
  src: grandMotors,
  alt: 'Grand Motors Logo'
})`
  transform: scale(0.8, 0.8);
`;

export const LogoAutoForce = styled.img.attrs({
  src: autoForce,
  alt: 'Auto Force Logo'
})`
  transform: scale(0.2, 0.2);
`;

export const Anchor = styled.a.attrs({
  href: 'https://google.com',
  target: '_blank'
})`
  font-size: ${styles.fonts.fontSizeSmall}px;
  font-weight: ${styles.weights.fontWeightLight};
  color: ${styles.colors.gray};
  margin-right: 1em;
`;