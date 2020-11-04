import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css`
  .c-landing-why {
    padding-top: 1.2rem;
    padding-bottom: 10%;
  }

  .c-landing-why__title {
    font-family: ${FONT.MERRIWEATHER};

    text-align: center;
  }

  .c-landing-why__text {
    font-family: ${FONT.MERRIWEATHER};
    font-weight: 300;
    line-height: 1.7;
  }

  .c-landing-why__icon {
    display: block;
    margin: auto;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-landing-why__title {
      font-size: 4rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .c-landing-why__text {
      font-size: 1.2rem;
      line-height: 1.8;
    }

    .c-landing-why__icon {
      width: 100px;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-landing-why__title {
      font-size: 4.5rem;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }

    .c-landing-why__text {
      font-size: 1.3rem;
      line-height: 1.8;
    }

    .c-landing-why__icon {
      width: 130px;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-landing-why__title {
      font-size: 5.5rem;
      margin-top: 1.5rem;
      margin-bottom: 3rem;
    }

    .c-landing-why__text {
      font-size: 1.5rem;
      line-height: 1.7;
    }

    .c-landing-why__icon {
      width: 160px;
    }
  }
`;
