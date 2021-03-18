import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css.global`
  #__next {
    position: relative;
    min-height: 100vh;
    padding-bottom: 120px;
  }

  @media ${MEDIA.SMALL_ONLY} {
    #__next {
      padding-bottom: 150px;
    }
  }
`;
