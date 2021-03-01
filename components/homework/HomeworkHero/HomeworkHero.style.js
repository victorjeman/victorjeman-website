import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { MEDIA } from '@settings/media.settings';

export default css`
  .c-homework-hero__title {
    font-family: ${FONT.MERRIWEATHER};
    font-size: 4rem;
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.3;
    font-weight: 300;
    margin-top: 4rem;
    margin-bottom: 1.2rem;
  }

  .c-homework-hero__title:after {
    content: '';
    display: block;
    height: 0.4rem;
    width: 5rem;
    margin: 0.4rem auto 0 auto;
    background-color: #de7376;
  }

  .c-homework-hero__info {
    font-family: ${FONT.IBM_PLEX};
    text-align: center;
    margin-bottom: 3rem;
  }

  .c-homework-hero__info-item {
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-homework-hero__title {
      font-size: 1.8rem;
    }

    .c-homework-hero__info-item {
      display: block;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-homework-hero__title {
      font-size: 2.2rem;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-homework-hero__info-item {
      display: inline-block;
    }

    .c-homework-hero__info-item:not(:last-child):after {
      content: '';
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      background-color: #de7376;
      position: absolute;
      top: 0;
      right: -1.2rem;
      bottom: 0;
      left: auto;
      margin: auto;
    }
  }
`;
