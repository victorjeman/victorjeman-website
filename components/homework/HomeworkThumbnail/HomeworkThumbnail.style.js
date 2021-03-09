import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';
import { MEDIA } from '@settings/media.settings';

export default css`
  .c-homework-thumbnail {
    background: ${COLOR.WHITE};
    border-radius: 1.2rem;
    margin-bottom: 3rem;
    box-shadow: -5px -5px 10px #f7f7f7, 5px 5px 10px #f1f1f1;
    color: ${COLOR.BLACK};
    text-decoration: none;
    display: block;
    font-family: ${FONT.IBM_PLEX};
  }

  .c-homework-thumbnail__title {
    margin-top: 1.5rem;
  }

  .c-homework-thumbnail__summary {
    margin-top: 1.3rem;
  }

  .c-homework-thumbnail:hover {
    text-decoration: underline;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-homework-thumbnail {
      padding: 1rem;
    }

    .c-homework-thumbnail__title {
      font-size: 1.3rem;
      line-height: 1.3;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-homework-thumbnail {
      padding: 1.5rem;
    }

    .c-homework-thumbnail__title {
      font-size: 1.2rem;
      line-height: 1.2;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-homework-thumbnail {
      padding: 2rem;
    }

    .c-homework-thumbnail__title {
      font-size: 1.5rem;
      line-height: 1.4;
    }
  }
`;
