import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { MEDIA } from '@settings/media.settings';

export default css`
  .c-post-hero__title {
    font-family: ${FONT.MERRIWEATHER};
    text-align: center;
    line-height: 1.3;
    font-weight: 300;
    margin: 4rem auto 3rem auto;
    max-width: 1000px;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-post-hero__title {
      font-size: 1.8rem;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-post-hero__title {
      font-size: 2.2rem;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-post-hero__title {
      font-size: 3rem;
    }
  }
`;
