import React from 'react';
import { string } from 'prop-types';

import styles from '../Style';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';

import {
  ContainerSocial,
  ItemSocial,
  TextSocial,
  ItemCounting,
  Counting
} from './Social.styles';

const Social = ({ text, number }) => (
  <ContainerSocial>
    <ItemSocial>
      <FaFacebookOfficial color={styles.colors.white} />
      <TextSocial>{text}</TextSocial>
    </ItemSocial>
    <ItemCounting>
      <Counting>{number}</Counting>
    </ItemCounting>
  </ContainerSocial>
);

Social.propTypes = {
  text: string.isRequired, // eslint-disable-line
  number: string.isRequired // eslint-disable-line
};

export default Social;
