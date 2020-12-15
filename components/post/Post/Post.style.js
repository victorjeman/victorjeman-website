import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-post-share {
    display: flex;
  }

  @media ${MEDIA.SMALL_AND_MEDIUM_ONLY} {
    .c-post-share {
      justify-content: center;
    }

    .c-post-share__item {
      margin-right: 0.3rem;
      margin-left: 0.3rem;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-post-share {
      position: absolute;
      right: -10rem;
      top: 15rem;
      flex-direction: column;
    }

    .c-post-share__item {
      margin-bottom: 0.2rem;
    }
  }
`;
