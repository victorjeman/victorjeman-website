import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css`
  .c-landing-why {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .c-landing-why__title {
    font-family: ${FONT.MERRIWEATHER};
    text-align: center;
  }

  .c-landing-why__text {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
  }

  .c-landing-why__icon {
    display: block;
    margin: auto;
  }

  .c-landing-why__subtitle {
    display: inline-block;
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 0.8rem;
  }

  .c-landing-why__subtitle:after {
    content: '';
    display: block;
    height: 5px;
    width: 40px;
    background-color: #de7376;
  }

  .c-landing-why__subtitle--main {
    display: block;
    margin-top: 0;
    margin-bottom: 3rem;
    font-family: ${FONT.MERRIWEATHER};
    text-align: center;
  }

  .c-landing-why__subtitle--main:after {
    margin: auto;
  }

  .c-landing-why__text:last-of-type {
    margin-bottom: 5rem;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-landing-why__title {
      font-size: 2.5rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .c-landing-why__text {
      font-size: 1.2rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .c-landing-why__icon {
      width: 100px;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-landing-why__title {
      font-size: 3.5rem;
      margin-top: 1rem;
      margin-bottom: 2.5rem;
    }

    .c-landing-why__icon {
      width: 130px;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-landing-why__title {
      font-size: 3.8rem;
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;
    }

    .c-landing-why__text {
      margin-bottom: 2rem;
      font-size: 1.5rem;
      line-height: 1.65;
    }
  }
`;
