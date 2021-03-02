import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { MEDIA } from '@settings/media.settings';

export default css.global`
  .c-post-hero {
    margin-bottom: 4rem;
  }

  .c-post-hero img {
    margin-right: auto;
    margin-left: auto;
  }

  .c-post-hero__title {
    font-family: ${FONT.MERRIWEATHER};
    text-align: center;
    line-height: 1.3;
    font-weight: 300;
    margin: 4rem auto 1.5rem auto;
    max-width: 1000px;
  }

  .c-post-hero__info {
    font-family: ${FONT.IBM_PLEX};
    text-align: center;
    margin-bottom: 3rem;
  }

  .c-post-hero__info-item {
    margin-left: 1rem;
    margin-right: 1rem;
    position: relative;
  }

  .c-post-hero__reading-time {
    color: #de7376;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-post-hero {
      margin-bottom: 1rem;
    }

    .c-post-hero__title {
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1.3rem;
    }

    .c-post-hero__info {
      margin-bottom: 1rem;
    }

    .c-post-hero__info-item {
      display: block;
    }

    .c-post-hero picture {
      min-height: 200px;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-post-hero__title {
      font-size: 2.2rem;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-post-hero__info-item {
      display: inline-block;
    }

    .c-post-hero__info-item:not(:last-child):after {
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

  @media ${MEDIA.LARGE_UP} {
    .c-post-hero__title {
      font-size: 3.2rem;
    }
  }
`;
