import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';

export default css.global`
  .c-homework-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.IBM_PLEX};
    font-weight: 400;
  }

  .c-homework-content h2 {
    font-size: 2.6rem;
    line-height: 1.8;
    margin-top: 4rem;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }

  .c-homework-content h3 {
    font-size: 2.1rem;
    line-height: 1.8;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }

  .c-homework-content p {
    font-size: 1.2rem;
    line-height: 1.85;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  .c-homework-content blockquote {
    background-color: #f7f7f7;
    padding: 1.2rem 1.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-left: 7px solid #de7376;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    font-family: ${FONT.TITILLIUM_WEB};
  }

  .c-homework-content blockquote p:last-child {
    margin-bottom: 0;
  }

  .c-homework-content img {
    display: block;
    margin: 2rem auto;
  }

  .c-homework-content li {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .c-homework-content li p {
    margin-bottom: 0.7rem;
  }
`;
