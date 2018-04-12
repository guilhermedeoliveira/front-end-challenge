import styled from 'styled-components';
import { RadioGroup, Radio } from 'react-radio-group';

import styles from '../Style';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;  
  padding-bottom: 1em;
  margin-left: 14rem;
`;

export const ContainerHeader = styled.div`
  text-align: center;
`;

export const Header = styled.h4`
  font-size: ${styles.fonts.fontSizeH4}px;
  color: ${styles.colors.white};
  margin-bottom: 0;
`;
export const SubHeader = styled.p`
  font-size: ${styles.fonts.fontSizeSmall}px;
  color: ${styles.colors.white};
`;

export const HR = styled.hr`
  width: 90%;
  border-width: 0.3px;
`;

export const ContainerForm = styled.div`
  padding: 0 1em;
  margin-bottom: 1em;
`;

export const Label = styled.label`
  font-size: ${styles.fonts.fontSizeSmall}px;
  color: ${styles.colors.white};
`;

export const ContainerCheckbox = styled.div``;

export const Option = styled.option`
  background-color: ${styles.colors.colorBackgroundLight};
`;

export const Select = styled.select`
  width: 100%;
  height: 2.5em;
  color: ${styles.colors.white};
  margin-bottom: 1em;
  border-radius: 5px;
  background: transparent;
  padding-left: 1em;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5em;
  margin-bottom: 1em;
  border-radius: 5px;
  background: transparent;
  padding-left: 1em;
  color: ${styles.colors.white};
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${styles.colors.promotion};
  color: ${styles.colors.white};
  border-radius: 5px;
  height: 3em;
  margin-top: 1em;
`;

export const Text = styled.p`
  cursor: pointer;
  text-decoration: underline;
  margin-left: 1.5em;
  color: ${styles.colors.white};
  font-size: ${styles.fonts.fontSizeSmall}px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5em;
  margin-bottom: 1em;
  position: relative;
  left -0.3em;
`;

export const StyledRadio = styled(Radio)`
  color: ${styles.colors.white};
`;
