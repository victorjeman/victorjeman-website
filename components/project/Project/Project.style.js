import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css`
  .c-landing-project {
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .c-landing-project__title {
    font-family: ${FONT.BEBAS_NEUE};
    letter-spacing: 1px;
    color: #112129;
  }

  .c-landing-project__label {
    font-family: ${FONT.MERRIWEATHER};
    position: relative;
    margin-bottom: 15px;
  }

  .c-landing-project__label-text {
    position: relative;
    z-index: 3;
    display: inline-block;
    padding: 12px 15px;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border: 3px solid #000;
  }

  .c-landing-project__label:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    background-color: #de7376;
    width: 100%;
    height: 100%;
    top: 5px;
    left: 5px;
  }

  .c-landing-project__illustration {
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .c-landing-project__description {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
  }

  .c-landing-project__text {
    margin-bottom: 15px;
  }

  .c-landing-project__played-with {
    font-family: ${FONT.MERRIWEATHER};
    font-size: 26px;
    text-align: center;
  }

  .c-landing-project__technologies {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .c-landing-project__technology {
    font-family: ${FONT.WORK_SANS};
    font-weight: 400;
    border-radius: 4px;
    padding: 6px 20px;
    background-color: #3f3d56;
    margin: 4px;
    color: #fff;
    list-style: none;
  }

  .c-landing-project__investigate {
    background: #ffc25d;
    box-shadow: 0px 5px 20px rgba(255, 194, 93, 0.3);
    border-radius: 30px;
    display: block;
    width: 300px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    padding: 18px 15px;
    text-align: center;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 20px;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
  }

  .c-landing-project__arrow-down {
    transform: rotate(45deg);
    margin: 90px auto 0 auto;
    display: block;
    width: 85px;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-landing-project {
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

    .c-landing-project__description {
      margin-top: 30px;
      font-size: 17px;
      line-height: 1.7;
    }

    .c-landing-project__technology {
      font-size: 14px;
      padding: 5px 10px;
    }

    .c-landing-project__played-with {
      margin-top: 60px;
      margin-bottom: 15px;
    }

    .c-landing-project__investigate {
      margin-top: 30px;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-landing-project {
      padding-bottom: 25%;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-landing-project {
      padding-top: 100px;
    }

    .c-landing-project__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .c-landing-project--reverse .c-landing-project__container {
      flex-direction: row-reverse;
    }

    .c-landing-project__column--1 {
      width: 58%;
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

    .c-landing-project__played-with {
      margin-top: 50px;
      margin-bottom: 20px;
    }

    .c-landing-project__investigate {
      margin-top: 60px;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-landing-project {
      padding-bottom: 10rem;
    }
  }

  @media ${MEDIA.XLARGE_UP} {
    .c-landing-project {
      padding-bottom: 12%;
    }
  }
`;
