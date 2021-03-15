import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css.global`
  .c-my-socials__icon {
    margin-right: 0.6rem;
    display: inline-block;
  }

  .c-my-socials__icon svg {
    width: 35px;
    height: 35px;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-my-socials__container {
      flex-direction: column;
    }
  }
`;
