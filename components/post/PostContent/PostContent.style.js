import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css.global`
  h2 {
    font-size: 1.8rem;
    line-height: 1.8;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }

  .c-post-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.IBM_PLEX};
  }

  .c-post-content p {
    font-size: 1.2rem;
    line-height: 1.85;
    font-weight: 300;
    margin-bottom: 2.3rem;
  }

  .c-post-content blockquote {
    background-color: #f7f7f7;
    padding: 1.5rem 2rem;
    border-radius: 0.8rem;
    margin-bottom: 2rem;
    font-family: ${FONT.TITILLIUM_WEB};
  }

  .c-post-content blockquote p {
    font-size: 1.3rem;
  }

  .c-post-content strong {
    font-weight: 600;
  }

  .c-post-content blockquote p:last-child {
    margin-bottom: 0;
  }

  .c-post-content__link {
    background: #ffc25d;
    box-shadow: 0px 5px 20px rgba(255, 194, 93, 0.3);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 2.5rem auto;
    padding: 1rem 0.8rem;
    text-align: center;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 1.2rem;
    line-height: 0.9;
    letter-spacing: 1px;
    color: ${COLOR.BLACK};
    text-decoration: none;
  }

  .c-post-content__link:hover {
    background-color: #eea52c;
  }
`;
