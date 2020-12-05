import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-reading-links {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-reading-links__item {
      margin-bottom: 1rem;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-reading-links {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .c-reading-links__item {
      width: 30%;
    }
  }
`;
