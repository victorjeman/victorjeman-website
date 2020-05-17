import css from 'styled-jsx/css';

import { MEDIA } from '../../common/settings/media.settings';
import { FONT } from '../../common/settings/font.settings';

export default css`
  .c-landing-hero {
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: #ebecf0;
    min-height: calc(100vh - 94px); // navigation height
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .c-landing-hero__container {
    background: linear-gradient(150.86deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), #ebecf0;
    background-blend-mode: soft-light, normal;
    border: 4px solid rgba(255, 255, 255, 0.16);
    box-sizing: border-box;
    box-shadow: 10px 10px 20px #a6abbd, -10px -10px 20px #fafbff;
    border-radius: 40px;
  }

  .c-landing-hero__left {
  }

  .c-landing-hero__right {
  }

  .c-landing-hero__title {
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 52px;
    line-height: 65px;
    margin: 0;
  }

  .c-landing-hero__title-line {
    display: block;
  }

  .c-landing-hero__description {
    font-family: ${FONT.WORK_SANS};
    font-size: 18px;
    line-height: 28px;
    font-weight: 300;
  }

  .c-landing-hero__illustration {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  @media ${MEDIA.MOBILE} {
    .c-landing-hero {
      padding-right: 30px;
      padding-left: 30px;
    }

    .c-landing-hero__container {
    }

    .c-landing-hero__left {
    }

    .c-landing-hero__right {
    }

    .c-landing-hero__title {
    }

    .c-landing-hero__title-line {
    }

    .c-landing-hero__description {
    }

    .c-landing-hero__illustration {
      margin-top: 30px;
    }
  }

  @media ${MEDIA.TABLET_DESKTOP} {
    .c-landing-hero {
      padding-right: 30px;
      padding-left: 30px;
    }

    .c-landing-hero__container {
      padding: 50px 90px;
    }

    .c-landing-hero__left {
    }

    .c-landing-hero__right {
    }

    .c-landing-hero__title {
    }

    .c-landing-hero__title-line {
    }

    .c-landing-hero__description {
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

    .c-landing-hero__left {
    }

    .c-landing-hero__right {
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
    .c-landing-hero__container {
      display: flex;
      justify-content: space-between;
    }

    .c-landing-hero__left {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .c-landing-hero__3ight {
      width: 40%;
    }
  }
`;
