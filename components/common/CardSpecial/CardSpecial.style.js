import css from 'styled-jsx/css';

import { COLOR } from '@settings/color.settings';

export default css`
  .c-card-special {
    position: relative;
  }

  .c-card-special__container {
    position: relative;
    z-index: 3;
    background-color: #fff;
  }

  .c-card-special__container--small {
    border: 3px solid #000;
  }

  .c-card-special__container--medium {
    border: 9px solid #000;
  }

  .c-card-special__container--large {
    border: 13px solid #000;
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
    top: 10px;
    left: 10px;
  }

  .c-card-special--medium:after {
    top: 15px;
    left: 15px;
  }

  .c-card-special--large:after {
    top: 18px;
    left: 18px;
  }
`;
