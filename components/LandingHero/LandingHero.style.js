import css from 'styled-jsx/css';

import { MEDIA } from '../../common/settings/media.settings';
import { FONT } from '../../common/settings/font.settings';
import { COLOR } from '../../common/settings/color.settings';

export default css`
  .c-landing-hero__container {
  }

  .c-landing-hero__title {
    font-family: ${FONT.MERRIWEATHER};
    margin: 0;
  }

  .c-landing-hero__title-line {
    display: block;
  }

  .c-landing-hero__title-name {
    color: ${COLOR.SUNGLO};
  }

  .c-landing-hero__description {
    font-family: ${FONT.WORK_SANS};
  }

  .c-landing-hero__illustration-wrapper {
    margin-right: auto;
    margin-left: auto;
  }

  .c-landing-hero__illustration {
    display: block;
    margin: 20px auto;
    width: 80%;
  }

  @media ${MEDIA.MOBILE} {
    .c-landing-hero {
      padding-bottom: 25%;
    }

    .c-landing-hero__container {
    }

    .c-landing-hero__title {
      font-size: 26px;
      line-height: 1.5;
    }

    .c-landing-hero__title-line {
    }

    .c-landing-hero__title-line--1 {
    }

    .c-landing-hero__title-line--2 {
      display: flex;
    }

    .c-landing-hero__title-name {
      margin-left: 15px;
    }

    .c-landing-hero__description {
      margin-top: 0;
      font-size: 20px;
      line-height: 1.4;
      font-weight: 300;
    }

    .c-landing-hero__illustration-wrapper {
      padding: 10px 30px 40px 30px;
    }

    .c-landing-hero__illustration {
    }
  }

  @media ${MEDIA.TABLET_DESKTOP} {
    .c-landing-hero {
      padding-right: 30px;
      padding-left: 30px;
      min-height: calc(100vh - 94px); // navigation heigh
    }

    .c-landing-hero__container {
      padding: 50px 90px;
    }

    .c-landing-hero__title {
      font-size: 52px;
      line-height: 65px;
    }

    .c-landing-hero__title-line {
    }

    .c-landing-hero__description {
      font-size: 18px;
      line-height: 28px;
      font-weight: 500;
    }

    .c-landing-hero__illustration {
      margin-top: 30px;
    }
  }

  @media ${MEDIA.TABLET} {
    .c-landing-hero {
    }

    .c-landing-hero__container {
    }

    .c-landing-hero__title {
    }

    .c-landing-hero__title-line {
    }

    .c-landing-hero__description {
    }

    .c-landing-hero__illustration {
    }
  }

  @media ${MEDIA.DESKTOP} {
    .c-landing-hero {
    }

    .c-landing-hero__container {
    }

    .c-landing-hero__title {
    }

    .c-landing-hero__title-line {
    }

    .c-landing-hero__description {
    }

    .c-landing-hero__illustration {
    }
  }
`;
