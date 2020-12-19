import css from 'styled-jsx/css';

import { COLOR } from '@settings/color.settings';
import { MEDIA } from '@settings/media.settings';

export default css`
  .c-card-special {
    position: relative;
    display: flex;
  }

  .c-card-special__container {
    position: relative;
    width: 100%;
    display: inline-block;
    z-index: 2;
    background-color: #fff;
  }

  .c-card-special__container--small {
    border: 3px solid #000;
  }

  .c-card-special__container--medium {
    border: 6px solid #000;
  }

  .c-card-special__container--large {
    border: 9px solid #000;
  }

  .c-card-special:after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    background-color: ${COLOR.CARNATION};
    width: 100%;
    height: 100%;
  }

  .c-card-special--small:after {
    top: 6px;
    left: 6px;
  }

  .c-card-special--medium:after {
    top: 9px;
    left: 9px;
  }

  .c-card-special--large:after {
    top: 12px;
    left: 12px;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-card-special:after {
      top: 5px !important;
      left: 5px !important;
    }
  }
`;
