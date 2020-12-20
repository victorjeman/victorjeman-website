import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-landing-power-level {
    min-height: 100vh;
    padding-top: 8%;
    padding-bottom: 8%;
    text-align: center;
    background-color: #f3f4f3;
  }

  .c-landing-power-level__title {
    font-family: ${FONT.BEBAS_NEUE};
    letter-spacing: 1px;
  }

  .c-landing-power-level__illustration {
    width: 100%;
    display: block;
    height: auto;
  }

  .c-landing-power-level__description {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    text-align: left;
  }

  .c-landing-power-level__text {
    margin-bottom: 20px;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-landing-power-level__title {
      font-size: 2.8rem;
      margin-top: 0.5rem;
      margin-bottom: 1.8rem;
    }

    .c-landing-power-level__description {
      margin-top: 40px;
      margin-bottom: 40px;
      font-size: 18px;
      line-height: 1.5;
    }

    .c-landing-power-level__illustration {
      border: 5px ${COLOR.WHITE} solid;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-landing-power-level__title {
      font-size: 35px;
      text-align: right;
      margin: 0;
      background-color: #ddd;
      display: inline-block;
      padding: 15px 25px;
      position: absolute;
      top: 15px;
      right: 15px;
    }

    .c-landing-power-level__illustration {
      border: 15px ${COLOR.WHITE} solid;
    }

    .c-landing-power-level__explore {
      margin: 60px auto 0 auto;
      max-width: 300px;
    }

    .c-landing-power-level__description {
      margin-top: 40px;
      font-size: 20px;
      line-height: 33px;
    }
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
