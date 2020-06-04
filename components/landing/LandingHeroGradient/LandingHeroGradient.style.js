import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-landing-hero-gradient {
    position: relative;
    background-color: #ebecf0;
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  }

  .c-landing-hero-gradient:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: auto;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEIUM_ONLY_DESKTOP} {
  }
  @media ${MEDIA.MEIUM_ONLY} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
