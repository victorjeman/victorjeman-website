import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-reading-links {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0;
  }

  .c-reading-links__item {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-reading-links {
      max-width: 300px;
      margin-right: auto;
      margin-left: auto;
    }

    .c-reading-links__item {
      margin-bottom: 1.5rem;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-reading-links {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .c-reading-links__item {
      width: 30%;
      margin-right: 1.8rem;
      margin-left: 1.8rem;
    }
  }
`;
