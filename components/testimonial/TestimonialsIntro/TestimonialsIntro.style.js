import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';

export default css`
  .c-testimonials-intro__title {
    font-size: 30px;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 50px;
    text-align: center;
    letter-spacing: 3px;
  }

  .c-testimonials-intro__text {
    font-size: 1.8rem;
    line-height: 1.3;
    font-family: ${FONT.WORK_SANS};
    margin-top: 2rem;
    margin-bottom: 4rem;
    text-align: center;
  }
`;
