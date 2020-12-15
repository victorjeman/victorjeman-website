import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-socials {
    display: flex;
  }

  @media ${MEDIA.MEDIUM_DOWN} {
    .c-socials {
      justify-content: center;
    }

    .c-socials__item {
      margin-right: 0.3rem;
      margin-left: 0.3rem;
    }
  }

  @media ${MEDIA.LARGE_UP} {
    .c-socials {
      position: absolute;
      right: -10rem;
      top: 1rem;
      flex-direction: column;
    }

    .c-socials__item {
      margin-bottom: 0.2rem;
    }
  }
`;
