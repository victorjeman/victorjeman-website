import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css.global`
  .c-post-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.MERRIWEATHER};
    font-weight: 300;
  }

  .c-post-content p {
    font-size: 18px;
    line-height: 1.85;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }
`;
