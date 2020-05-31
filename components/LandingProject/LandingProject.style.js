import css from 'styled-jsx/css';

import { MEDIA } from '../../common/settings/media.settings';
import { FONT } from '../../common/settings/font.settings';

export default css`
  .c-landing-project {
    background-repeat: no-repeat;
    background-position: bottom;
  }

  .c-landing-project__container {
  }

  .c-landing-project__title {
    font-family: ${FONT.MERRIWEATHER};
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

  .c-landing-project__illustration-wrapper {
  }

  .c-landing-project__illustration {
    width: 100%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .c-landing-project__see-more {
    background: #ffc25d;
    box-shadow: 0px 5px 20px rgba(255, 194, 93, 0.3);
    border-radius: 30px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 260px;
    padding: 18px 15px;
    text-align: center;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 20px;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
  }

  @media ${MEDIA.MOBILE} {
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

    .c-landing-project__see-more {
      margin-top: 60px;
    }
  }

  @media ${MEDIA.TABLET_DESKTOP} {
    .c-landing-project {
    }

    .c-landing-project__container {
    }

    .c-landing-project__title {
    }

    .c-landing-project__duration {
    }

    .c-landing-project__role {
    }

    .c-landing-project__illustration-wrapper {
    }

    .c-landing-project__illustration {
    }

    .c-landing-project__see-more {
    }
  }

  @media ${MEDIA.TABLET} {
    .c-landing-project {
    }

    .c-landing-project__container {
    }

    .c-landing-project__title {
    }

    .c-landing-project__duration {
    }

    .c-landing-project__role {
    }

    .c-landing-project__illustration-wrapper {
    }

    .c-landing-project__illustration {
    }

    .c-landing-project__see-more {
    }
  }

  @media ${MEDIA.DESKTOP} {
    .c-landing-project {
    }

    .c-landing-project__container {
    }

    .c-landing-project__title {
    }

    .c-landing-project__duration {
    }

    .c-landing-project__role {
    }

    .c-landing-project__illustration-wrapper {
    }

    .c-landing-project__illustration {
    }

    .c-landing-project__see-more {
    }
  }
`;
