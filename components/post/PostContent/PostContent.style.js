import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';
import { MEDIA } from '@settings/media.settings';

export default css.global`
  h1:after {
    content: '';
    display: block;
    height: 0.4rem;
    width: 5rem;
    margin: 0.4em auto 0 auto;
    background-color: #de7376;
  }

  h2 {
    font-size: 1.8em;
    line-height: 1.8;
    margin-top: 3em;
    margin-bottom: 1.2em;
    font-weight: 500;
  }

  .c-post-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.IBM_PLEX};
    font-weight: 300;
  }

  .c-post-content p {
    margin-bottom: 2em;
    font-size: 1em;
  }

  .c-post-content blockquote {
    background-color: #f7f7f7;
    padding: 1.2em 1.8em;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-left: 7px solid #de7376;
    margin-top: 2.5rem color;
    margin-bottom: 2.5rem;
    font-family: ${FONT.TITILLIUM_WEB};
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
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
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

  @media ${MEDIA.SMALL_ONLY} {
    .c-post-content {
      font-size: 1.1em;
      line-height: 1.75;
    }

    .c-post-content blockquote {
      padding: 1em 1.2em;
    }

    .c-post-content blockquote p {
      font-size: 1.2em;
      line-height: 1.2;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-post-content {
      font-size: 1.2em;
      line-height: 1.85;
    }

    .c-post-content blockquote p {
      font-size: 1.1em;
      line-height: 1.3;
    }
  }
`;
