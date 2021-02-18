import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';

export default css`
  .c-homework-hero__title {
    font-family: ${FONT.MERRIWEATHER};
    font-size: 4rem;
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.3;
    font-weight: 300;
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  .c-homework-hero__title:after {
    content: '';
    display: block;
    height: 0.4rem;
    width: 5rem;
    margin: 0.4em auto 0 auto;
    background-color: #de7376;
  }
`;
