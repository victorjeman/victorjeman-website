import css from 'styled-jsx/css';

import { STYLE } from '@settings/style.settings';

export default css.global`
  .c-container {
    max-width: ${STYLE.CONTAINER_WIDTH};
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 15px;
  }
`;
