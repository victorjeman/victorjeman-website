/* eslint-disable prettier/prettier */
import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';

export default css`
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
    margin-right: 10px;
    margin-left: 10px;
    display: inline-block;
  }
  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEIUM_ONLY} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
