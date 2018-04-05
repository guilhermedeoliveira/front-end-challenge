import React from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import {
  ContainerFooterSocial,
  ContainerFooterSocialItem
} from './Footer.styles';

const FooterSocial = () => (
  <ContainerFooterSocial>
    <ContainerFooterSocialItem>
      <FaFacebook size={16} />
    </ContainerFooterSocialItem>
    <ContainerFooterSocialItem>
      <FaTwitter size={16} />
    </ContainerFooterSocialItem>
    <ContainerFooterSocialItem>
      <FaGooglePlus size={16} />
    </ContainerFooterSocialItem>
  </ContainerFooterSocial>
);

export default FooterSocial;