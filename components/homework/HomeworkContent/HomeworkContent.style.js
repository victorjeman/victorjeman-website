import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { MEDIA } from '@settings/media.settings';

export default css.global`
  .c-homework-content {
    margin-top: 30px;
    color: rgba(41, 41, 41, 1);
    font-family: ${FONT.IBM_PLEX};
    font-weight: 400;
  }

  .c-homework-content h1,
  .c-homework-content h2,
  .c-homework-content h3,
  .c-homework-content h4 {
    font-family: ${FONT.MERRIWEATHER};
  }

  .c-homework-content h2 {
    font-size: 2.3rem;
    line-height: 1.8;
    margin-top: 4rem;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }

  .c-homework-content h3 {
    font-size: 1.7rem;
    line-height: 1.8;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    font-weight: 500;
  }

  .c-homework-content h4 {
    font-size: 1.4rem;
    line-height: 1.6;
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
    padding: 1.2rem 1.6rem;
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
    font-size: 1.2rem;
    line-height: 1.7;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .c-homework-content li p {
    margin-bottom: 0.6rem;
    line-height: 1.5;
  }

  .c-homework-content pre {
    overflow: auto;
  }

  .c-table-of-content {
    width: 100%;
    background-color: #f7f7f7;
    margin-top: 4rem;
    padding: 2rem;
    border-top: 7px solid #de7376;
  }

  h2.c-table-of-content__title {
    margin-top: 0;
  }

  .c-table-of-content__list {
    list-style: none;
    padding: 0 0 0 1.5rem;
  }

  li.c-table-of-content__item {
    margin: 0;
  }

  .c-table-of-content a {
    display: inline-block;
    text-decoration: none;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
  }

  @media ${MEDIA.LARGE_DOWN} {
    .c-homework-content {
      max-width: 750px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 15px;
      padding-left: 15px;
    }
  }

  @media ${MEDIA.XLARGE_UP} {
    .c-homework-content__left {
      width: 380px;
    }

    .c-homework-content__right {
      width: calc(100% - 430px);
      margin-left: auto;
    }

    .c-table-of-content {
      position: absolute;
      margin-top: 5rem;
    }

    h2.c-table-of-content__title {
      font-size: 1.6rem;
      text-align: center;
    }

    .c-table-of-content {
      padding: 2rem 0.5rem;
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

  @media ${MEDIA.SMALL_ONLY} {
    .c-homework-content h2 {
      font-size: 1.6rem;
      line-height: 1.5;
    }

    .c-homework-content h3 {
      font-size: 1.2rem;
      line-height: 1.8;
      font-weight: 500;
      line-height: 1.4;
    }

    .c-homework-content h4 {
      font-size: 1.1rem;
      line-height: 1.6;
    }

    .c-homework-content p {
      font-size: 1.1rem;
      line-height: 1.85;
    }

    .c-homework-content blockquote {
      padding: 1rem;
    }

    .c-homework-content blockquote p {
      line-height: 1.4;
    }
  }
`;
