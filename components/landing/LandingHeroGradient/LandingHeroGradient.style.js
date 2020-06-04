import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-landing-hero-gradient {
    position: relative;
    overflow: hidden;
  }

  .c-landing-hero-gradient:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-image: url('/images/shape-dividers/divider-top4.svg');
    // background-repeat: no-repeat;
    // background-position: bottom;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEIUM_UP} {
  }

  @media ${MEDIA.MEIUM_ONLY} {
    .c-landing-hero-gradient:after {
      bottom: -5%;
    }
  }

  @media ${MEDIA.LARGE_ONLY} {
    .c-landing-hero-gradient:after {
      bottom: -4%;
    }
  }

  @media ${MEDIA.XLARGE_UP} {
    .c-landing-hero-gradient:after {
      bottom: -14%;
    }
  }
`;
