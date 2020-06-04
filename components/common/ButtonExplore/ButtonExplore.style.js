import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-button-explore {
    background-color: transparent;
    border: 0;
    min-width: 200px;
    width: 100%;
    padding: 0;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 20px;
    letter-spacing: 1px;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  .c-button-explore__text {
    z-index: 2;
    background-color: ${COLOR.WHITE};
    display: block;
    position: relative;
    padding: 12px 15px;
    border: 4px solid ${COLOR.BLACK};
  }

  .c-button-explore:before,
  .c-button-explore:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    background-color: ${COLOR.SUNGLO};
    width: 35%;
    height: 70%;
  }

  .c-button-explore:before {
    right: -5px;
    bottom: -5px;
  }

  .c-button-explore:after {
    left: -5px;
    top: -5px;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEDIUM_UP} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
