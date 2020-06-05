import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-landing-projects-intro {
    min-height: 100vh;
    padding-top: 8%;
    padding-bottom: 8%;
    text-align: center;
    background-color: #f3f4f3;
  }
  CardSpecialType .c-landing-projects-intro {
    display: flex;
  }

  .c-landing-projects-intro__title {
    text-align: right;
    font-family: ${FONT.BEBAS_NEUE};
    letter-spacing: 1px;
    font-size: 50px;
    margin: 0;
    background-color: #ddd;
    display: inline-block;
    padding: 10px 20px;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .c-landing-projects-intro__illustration {
    max-width: 700px;
    width: 100%;
    margin: 15px;
  }

  .c-landing-projects-intro__description {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
    max-width: 700px;
    margin-right: auto;
    margin-left: auto;
    text-align: left;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-landing-projects-intro__explore {
      margin: 60px auto 0 auto;
      max-width: 300px;
    }

    .c-landing-projects-intro__description {
      margin-top: 40px;
      font-size: 20px;
      line-height: 33px;
    }
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
