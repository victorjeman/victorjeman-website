import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css.global`
  .c-page-footer {
    text-align: center;
    border-top: 1px solid #d9d9d9;
    font-family: ${FONT.WORK_SANS};
    font-weight: 400;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .c-page-footer__container {
    display: flex;
    justify-content: space-between;
  }

  .c-page-footer__author {
    margin-bottom: 10px;
    color: #2d3e8e;
  }

  .c-page-footer__icon {
    margin-right: 0.3rem;
    margin-left: 0.3rem;
    display: inline-block;
  }

  .c-page-footer__icon svg {
    width: 35px;
    height: 35px;
  }

  .c-page-footer__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .c-page-footer__list-item {
    margin-right: 1.2rem;
  }

  .c-page-footer__link {
    color: #2d3e8e;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-page-footer__container {
      flex-direction: column;
    }

    .c-page-footer__list {
      text-align: center;
      margin-bottom: 1rem;
      justify-content: center;
    }
  }
`;
