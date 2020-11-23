import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-testimonial {
    margin: 2rem auto 5rem auto;
    background-color: red;
  }

  .c-testimonial__container {
    padding: 20px;
  }

  .c-testimonial__author-name {
    font-family: ${FONT.BEBAS_NEUE};
    font-size: 30px;
    line-height: 1;
    margin-bottom: 10px;
    color: ${COLOR.GUN_POWDER};
  }

  .c-testimonial__author-info {
    font-family: ${FONT.WORK_SANS};
    color: ${COLOR.GUN_POWDER};
    font-size: 18px;
  }

  .c-testimonial__author-linkedin {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .c-testimonial__text {
    font-family: ${FONT.WORK_SANS};
    font-weight: 300;
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .c-testimonial__text:last-of-type {
    margin-bottom: 0;
  }

  .c-testimonial__text--first {
    margin-top: 35px;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEDIUM_UP} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
