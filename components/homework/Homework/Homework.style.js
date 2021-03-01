import css from 'styled-jsx/css';

import { FONT } from 'common/settings/font.settings';
import { MEDIA } from 'common/settings/media.settings';

export default css.global`
  .c-labs-feedback {
    margin: 6rem auto 2rem auto;
    max-width: 640px;
    width: 100%;
  }

  .c-labs-feedback__title {
    font-size: 2.5rem;
    font-family: ${FONT.MERRIWEATHER};
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .c-labs-feedback__title:after {
    margin-top: 5px;
    content: '';
    display: block;
    height: 8px;
    width: 120px;
    background-color: #fa6866;
  }

  .c-labs-feedback__intro {
    font-family: ${FONT.MERRIWEATHER};
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .c-labs-feedback iframe {
    width: 100%;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-labs-feedback__title {
      font-size: 1.5rem;
    }

    .c-labs-feedback__title:after {
      width: 80px;
      height: 6px;
    }

    .c-labs-feedback__intro {
      font-size: 1rem;
    }
  }
`;
