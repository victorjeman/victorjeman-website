import css from 'styled-jsx/css';

import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';
import { MEDIA } from '@settings/media.settings';

export default css.global`
  .c-post-thumbnail {
    background: ${COLOR.WHITE};
    border-radius: 1.2rem;
    margin-bottom: 1.5rem;
    box-shadow: -5px -5px 10px #f7f7f7, 5px 5px 10px #f1f1f1;
    color: ${COLOR.BLACK};
    text-decoration: none;
    display: block;
    font-family: ${FONT.IBM_PLEX};
  }

  .c-post-thumbnail__title {
    margin-top: 1.3rem;
  }

  .c-post-thumbnail__reading {
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  .c-post-thumbnail__category {
    color: #de7376;
    font-weight: 500;
  }

  .c-post-thumbnail:hover {
    text-decoration: underline;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-post-thumbnail {
      padding: 1rem;
    }

    .c-post-thumbnail img {
      height: 300px;
    }

    .c-post-thumbnail__title {
      font-size: 1.3rem;
      line-height: 1.3;
    }
  }

  @media ${MEDIA.MEDIUM_ONLY} {
    .c-post-thumbnail {
      padding: 1.5rem;
      width: 48%;
    }

    .c-post-thumbnail__title {
      font-size: 1.2rem;
      line-height: 1.2;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-post-thumbnail {
      width: 32%;
      padding: 1rem;
    }

    .c-post-thumbnail__title {
      font-size: 1.1rem;
      line-height: 1.2;
    }
  }
`;
