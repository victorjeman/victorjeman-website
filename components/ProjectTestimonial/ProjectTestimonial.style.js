import css from 'styled-jsx/css';

import { MEDIA } from '../../common/settings/media.settings';

export default css`
  .c-project-testimonial {
    margin-bottom: 70px;
  }

  .c-project-testimonial__illustration {
    max-width: 300px;
  }

  .c-project-testimonial__author {
  }

  .c-project-testimonial__text {
  }

  @media ${MEDIA.MOBILE} {
    .c-project-testimonial {
      background-color: orange;
    }
  }

  @media ${MEDIA.TABLET} {
    .c-project-testimonial {
      background-color: red;
    }
  }

  @media ${MEDIA.DESKTOP} {
    .c-project-testimonial {
      background-color: blue;
    }
  }
`;
