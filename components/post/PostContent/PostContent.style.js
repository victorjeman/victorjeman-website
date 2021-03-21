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
    font-size: 2.6rem;
    line-height: 1.3;
    margin-top: 4rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  h3 {
    font-size: 2.1rem;
    line-height: 1.3;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .c-post-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.IBM_PLEX};
    font-weight: 300;
  }

  .c-post-content p {
    margin-bottom: 2rem;
    font-size: 1em;
  }

  .c-post-content blockquote {
    background-color: #f7f7f7;
    padding: 1.2rem 1.8rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    border-left: 7px solid #de7376;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    font-family: ${FONT.TITILLIUM_WEB};
  }

  .c-post-content blockquote p:last-child {
    margin-bottom: 0;
  }

  .c-post-content strong {
    font-weight: 500;
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

  .c-post-content img {
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  .c-post-content li {
    line-height: 1.5;
    margin-bottom: 0.9rem;
  }

  .c-post-content iframe {
    margin-top: 1.5rem;
    width: 100%;
  }

  .c-table-of-content {
    width: 100%;
    background-color: #f7f7f7;
    margin-top: 4rem;
    padding: 2rem;
  }

  h2.c-table-of-content__title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .c-table-of-content__list {
    list-style: none;
    padding: 0 0 0 1.5rem;
    margin: 0;
  }

  li.c-table-of-content__item {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  li.c-table-of-content__item a {
    margin: 0;
    line-height: 1.4;
  }

  .c-table-of-content ul ul {
    margin-top: 0.6rem;
  }

  .c-table-of-content a {
    display: inline-block;
    text-decoration: none;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    line-height: 1.2;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-post-content {
      font-size: 1.1rem;
      line-height: 1.75;
    }

    .c-post-content blockquote {
      padding: 1rem 0.8rem;
    }

    .c-post-content blockquote p {
      font-size: 1.1rem;
      line-height: 1.3;
    }

    h2 {
      font-size: 1.7rem;
      line-height: 1.2;
    }

    h3 {
      font-size: 1.5rem;
      line-height: 1.2;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-post-content {
      font-size: 1.2rem;
      line-height: 1.85;
    }

    .c-post-content blockquote p {
      font-size: 1.3rem;
      line-height: 1.4;
    }
  }

  @media ${MEDIA.LARGE_DOWN} {
    .c-post-content {
      max-width: 720px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }

  @media ${MEDIA.XLARGE_UP} {
    .c-post-content__left {
      width: 380px;
    }

    .c-post-content__right {
      width: calc(100% - 430px);
      margin-left: auto;
    }

    // TODO Move to a separate component
    .c-table-of-content {
      position: absolute;
      margin-top: 1rem;
    }

    h2.c-table-of-content__title {
      font-size: 1.6rem;
      text-align: center;
    }

    .c-table-of-content {
      padding: 2rem 1rem;
    }

    .c-table-of-content__item {
      line-height: 1.2;
    }

    .c-table-of-content a {
      font-size: 1rem;
    }

    .c-table-of-content__list {
      padding-left: 0.5rem;
    }
  }
`;
