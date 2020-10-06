import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css`
  .c-landing-why {
    padding-top: 20x;
    padding-bottom: 10%;
  }

  .c-landing-why__title {
    font-family: ${FONT.MERRIWEATHER};
    font-size: 38px;
    margin-top: 20px;
    margin-bottom: 40px;
    text-align: center;
  }

  .c-landing-why__text {
    font-family: ${FONT.MERRIWEATHER};
    font-size: 19px;
    font-weight: 300;
    line-height: 1.6;
  }

  .c-landing-why__icon {
    width: 50px;
    display: block;
    margin: auto;
  }
`;
