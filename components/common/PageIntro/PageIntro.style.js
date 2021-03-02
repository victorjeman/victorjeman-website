import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-page-intro {
    text-align: center;
  }

  .c-page-intro__title {
    font-family: ${FONT.MERRIWEATHER};
    position: relative;
    margin-top: 1.5rem;
  }

  .c-page-intro__title:after {
    content: '';
    position: absolute;
    display: block;
    height: 6px;
    width: 60px;
    right: 0;
    left: 0;
    top: auto;
    margin: auto;
    background-color: #de7376;
  }

  .c-page-intro__description {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
    line-height: 1.4;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-page-intro {
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .c-page-intro__title {
      font-size: 2rem;
      line-height: 1;
      margin-top: 0;
      margin-bottom: 2.5rem;
    }

    .c-page-intro__title:after {
      bottom: -18px;
    }

    .c-page-intro__description {
      font-size: 1.2rem;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-page-intro {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }

    .c-page-intro__title {
      font-size: 3.5rem;
      line-height: 1;
      margin-bottom: 4rem;
    }

    .c-page-intro__title:after {
      bottom: -26px;
    }

    .c-page-intro__description {
      font-size: 1.4rem;
    }
  }
`;
