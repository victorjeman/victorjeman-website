import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css`
  .c-socials {
    display: flex;
    margin-top: 2rem;
  }

  .c-socials {
    justify-content: center;
  }

  .c-socials__item {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .c-socials--sticky {
    position: absolute;
    right: -10rem;
    top: 1rem;
    flex-direction: column;
  }

  .c-socials--sticky .c-socials__item {
    margin-bottom: 0.2rem;
  }
`;
