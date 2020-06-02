import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';

export default css.global`
  .u-hide {
    display: block !important;
  }

  .u-show-small-only,
  .u-show-medium-up {
    display: none;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .u-show-small-only {
      display: block !important;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .u-show-medium-up {
      display: block !important;
    }
  }
`;
