import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css.global`
  h1:after {
    content: '';
    display: block;
    height: 0.4rem;
    width: 5rem;
    margin: 0.6rem auto 0 auto;
    background-color: #de7376;
  }

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

  .c-post-content-anchor {
    background-color: transparent;
    border: 0;
    min-width: 300px;
    padding: 0;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 20px;
    letter-spacing: 1px;
    position: relative;
    z-index: 10;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    text-align: center;
    margin-bottom: 2rem;
  }

  .c-post-content-anchor__text {
    z-index: 2;
    background-color: ${COLOR.WHITE};
    display: block;
    position: relative;
    padding: 12px 15px;
    border: 3px solid ${COLOR.BLACK};
  }

  .c-post-content-anchor:before,
  .c-post-content-anchor:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    background-color: ${COLOR.SUNGLO};
    width: 35%;
    height: 70%;
    transition: all 0.2s ease-out;
  }

  .c-post-content-anchor:before {
    right: -4px;
    bottom: -4px;
  }

  .c-post-content-anchor:after {
    left: -4px;
    top: -4px;
  }

  .c-post-content-anchor:hover:before,
  .c-post-content-anchor:hover:after {
    height: calc(100% + 8px);
    width: calc(100% + 8px);
  }
`;
