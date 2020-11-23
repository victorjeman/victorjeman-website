import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-landing-hero {
    position: relative;
    z-index: 2; // to make sure the svg doesn't get on top of the content
  }

  .c-landing-hero__title {
    font-family: ${FONT.MERRIWEATHER};
    margin: 0;
  }

  .c-landing-hero__title-line {
    display: block;
  }

  .c-landing-hero__title-line--3 {
    display: flex;
  }

  .c-landing-hero__i-love {
    margin-left: 10px;
    color: ${COLOR.SUNGLO};
  }

  .c-landing-hero__title-name {
    color: ${COLOR.SUNGLO};
    display: inline-block;
    margin-left: 15px;
  }

  .c-landing-hero__description {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
  }

  .c-landing-hero__illustration {
    display: block;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-landing-hero {
      padding-bottom: 25%;
    }

    .c-landing-hero__title {
      font-size: 26px;
      line-height: 1.5;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .c-landing-hero__description {
      margin-top: 0;
      font-size: 18px;
      line-height: 1.5;
    }

    .c-landing-hero__illustration-wrapper {
      padding: 10px 30px 40px 30px;
      margin: 15px auto 0 auto;
    }

    .c-landing-hero__illustration {
      margin: 5% auto;
      width: 90%;
    }

    .c-landing-hero__explore {
      margin-top: 40px;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-landing-hero__container {
      padding-right: 30px;
    }

    .c-landing-hero__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: calc(100vh - 78px);
    }

    .c-landing-hero__title {
      line-height: 1.5;
    }

    .c-landing-hero__description {
      margin-top: 15px;
      font-size: 20px;
      line-height: 1.6;
    }

    .c-landing-hero__title-line--2 {
      margin-top: 60px;
    }

    .c-landing-hero__illustration {
      max-width: calc(100% - 40px);
      width: 100%;
      margin: 20px;
    }

    .c-landing-hero__explore {
      margin-top: 40px;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-landing-hero__info {
      width: 50%;
    }
    .c-landing-hero__illustration-wrapper {
      width: 45%;
    }

    .c-landing-hero__title-line--1 {
      font-size: 40px;
    }

    .c-landing-hero__title-line--2 {
      margin-top: 50px;
      font-size: 35px;
    }

    .c-landing-hero__title-line--3 {
      margin-top: 15px;
      font-size: 35px;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-landing-hero__title-line--1 {
      font-size: 60px;
    }

    .c-landing-hero__title-line--2 {
      margin-top: 20px;
      font-size: 40px;
    }

    .c-landing-hero__title-line--3 {
      margin-top: 40px;
      font-size: 35px;
    }

    .c-landing-hero__info {
      width: 45%;
    }

    .c-landing-hero__explore {
      max-width: 50%;
    }

    .c-landing-hero__illustration-wrapper {
      width: 40%;
    }
  }
`;
