import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css`
  .c-landing-project {
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .c-landing-project__container {
  }

  .c-landing-project__title {
    font-family: ${FONT.BEBAS_NEUE};
    letter-spacing: 1px;
    color: #112129;
  }

  .c-landing-project__label {
    font-family: ${FONT.MERRIWEATHER};
    border: 3px solid #000;
    padding: 12px 15px;
    position: relative;
    background-color: #fff;
  }

  .c-landing-project__label:after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    background-color: #fa6866;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 10px;
  }

  .c-landing-project__illustration {
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .c-landing-project__description {
    font-family: ${FONT.INTER};
  }

  .c-landing-project__investigate {
    background: #ffc25d;
    box-shadow: 0px 5px 20px rgba(255, 194, 93, 0.3);
    border-radius: 30px;
    display: block;
    width: 260px;
    padding: 18px 15px;
    text-align: center;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 20px;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-landing-project {
    }

    .c-landing-project__container {
      padding-top: 10%;
      padding-bottom: 35%;
    }

    .c-landing-project__title {
      font-size: 32px;
      margin-bottom: 35px;
      text-align: center;
    }

    .c-landing-project__label {
      max-width: 90%;
      margin: 25px auto 0 auto;
      font-size: 16px;
    }

    .c-landing-project__illustration-wrapper {
      margin-top: 40px;
    }

    .c-landing-project__illustration {
      max-width: 90%;
    }

    .c-landing-project__description {
      margin-top: 30px;
      font-size: 16px;
      line-height: 1.6;
    }

    .c-landing-project__buttons {
      margin-top: 60px;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-landing-project {
      padding-top: 100px;
      padding-bottom: 25%;
    }

    .c-landing-project__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .c-landing-project__container--reverse {
      flex-direction: row-reverse;
    }

    .c-landing-project__column--1 {
      width: 50%;
    }

    .c-landing-project__column--2 {
      width: 35%;
    }

    .c-landing-project__label {
      display: inline-block;
      margin-right: 20px;
    }

    .c-landing-project__title {
      font-size: 50px;
      margin-bottom: 10px;
    }

    .c-landing-project__description {
      font-size: 18px;
      line-height: 1.7;
      font-weight: 300;
      margin-top: 40px;
    }

    .c-landing-project__buttons {
      margin-top: 70px;
      max-width: 600px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .c-landing-project__investigate {
      width: 55%;
    }

    .c-landing-project__explore-further {
      width: 35%;
    }
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
