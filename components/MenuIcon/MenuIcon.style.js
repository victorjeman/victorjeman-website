import css from 'styled-jsx/css';

import { COLOR } from '../../common/settings/color.settings';

export default css`
  .c-menu-icon {
    display: block;
    width: 24px;
    height: 27px;
    position: relative;
  }

  .c-menu-icon__line {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${COLOR.BLACK};
  }

  .c-menu-icon__line--1 {
    top: 5px;
  }

  .c-menu-icon__line--2 {
    top: 14px;
  }

  .c-menu-icon__line--3 {
    top: 23px;
  }
`;
