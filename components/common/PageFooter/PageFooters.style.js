import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css.global`
  .c-page-footer {
    text-align: center;
    border-top: 1px solid #d9d9d9;
    padding: 15px;
    font-family: ${FONT.WORK_SANS};
    font-weight: 400;
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
    margin-bottom: 20px;
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

  @media ${MEDIA.SMALL_ONLY} {
    .c-page-footer__container {
      flex-direction: column;
    }
  }
`;
