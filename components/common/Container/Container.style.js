import css from 'styled-jsx/css';

import { STYLE } from '@settings/style.settings';

export default css`
  .c-container {
    max-width: ${STYLE.CONTAINER_WIDTH};
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    position: relative;
  }

  .c-container--small {
    max-width: 750px;
  }

  .c-container--medium {
    max-width: 850px;
  }

  .c-container--large {
    max-width: 1000px;
  }

  .c-container--xlarge {
    max-width: 1200px;
  }

  .c-container--xxlarge {
    max-width: 1300px;
  }
`;
