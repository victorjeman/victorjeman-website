import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-testimonials-intro {
    position: relative;
    background-image: url('images/shape-dividers/divider7.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    padding-bottom: 25%;
  }

  .c-testimonials-intro__title {
    font-size: 30px;
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 50px;
    text-align: center;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEDIUM_UP} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
