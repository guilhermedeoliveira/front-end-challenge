import styled from 'styled-components';

import { injectGlobal } from 'styled-components';

injectGlobal`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  * {
  box-sizing: border-box;
  font-family: Dosis, sans-serif;
  }
`;

export const MainContainer = styled.div``;