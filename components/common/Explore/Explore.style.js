import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-explore {
    background-color: transparent;
    border: 0;
    width: 100%;
    padding: 0;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 20px;
    letter-spacing: 1px;
    position: relative;
    z-index: 10;
    cursor: pointer;
    display: block;
    text-decoration: none;
    color: inherit;
    text-align: center;
  }

  .c-explore__text {
    z-index: 2;
    background-color: ${COLOR.WHITE};
    display: block;
    position: relative;
    padding: 12px 15px;
    border: 3px solid ${COLOR.BLACK};
  }

  .c-explore:before,
  .c-explore:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    background-color: ${COLOR.SUNGLO};
    width: 35%;
    height: 70%;
    transition: all 0.2s ease-out;
  }

  .c-explore:before {
    right: -4px;
    bottom: -4px;
  }

  .c-explore:after {
    left: -4px;
    top: -4px;
  }

  .c-explore:hover:before,
  .c-explore:hover:after {
    height: calc(100% + 8px);
    width: calc(100% + 8px);
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEDIUM_UP} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
