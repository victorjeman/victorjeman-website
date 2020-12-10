import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';

export default css.global`
  .c-homework-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.IBM_PLEX};
    font-weight: 400;
  }

  .c-homework-content p {
    font-size: 1.1rem;
    line-height: 1.66;
    margin-bottom: 1.5rem;
  }

  .c-homework-content h2 {
    font-size: 2.4rem;
    line-height: 1.8;
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
    font-family: ${FONT.TITILLIUM_WEB};
    font-weight: 600;
  }

  .c-homework-content h3 {
    font-size: 1.8rem;
    line-height: 1.6;
    margin-top: 2.5rem;
    margin-bottom: 1.2rem;
    font-family: ${FONT.TITILLIUM_WEB};
    font-weight: 600;
  }

  .c-homework-content img {
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .c-homework-content li {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
