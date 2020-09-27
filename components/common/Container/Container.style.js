import css from 'styled-jsx/css';

import { STYLE } from '@settings/style.settings';

export default css`
  .c-container {
    max-width: ${STYLE.CONTAINER_WIDTH};
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
`;
