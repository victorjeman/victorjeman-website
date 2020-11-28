import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-post-thumbnail {
    background: ${COLOR.WHITE};
    border-radius: 10px;
    width: 48%;
    margin-bottom: 2rem;
    padding: 2rem;
    box-shadow: -10px -10px 20px #f7f7f7, 10px 10px 20px #f1f1f1;
  }

  .c-post-thumbnail__thumbnail {
    width: 100%;
    height: auto;
  }
`;
