import React from 'react';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';

import {
  ContainerFooterSocial,
  ContainerFooterSocialItem,
  SocialLink
} from './Footer.styles';

const FooterSocial = () => (
  <ContainerFooterSocial>
    <ContainerFooterSocialItem>
      <SocialLink link="https://facebook.com">
        <FaFacebook size={16} />
      </SocialLink>
    </ContainerFooterSocialItem>
    <ContainerFooterSocialItem>
      <SocialLink link="https://twitter.com">
        <FaTwitter size={16} />
      </SocialLink>
    </ContainerFooterSocialItem>
    <ContainerFooterSocialItem>
      <SocialLink link="https://plus.google.com.com">
        <FaGooglePlus size={16} />
      </SocialLink>
    </ContainerFooterSocialItem>
  </ContainerFooterSocial>
);

export default FooterSocial;