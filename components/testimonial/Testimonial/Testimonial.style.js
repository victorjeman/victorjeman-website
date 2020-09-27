import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

export default css`
  .c-testimonial {
    margin: 20px auto 40px auto;
    background-color: red;
  }

  .c-testimonial__container {
    padding: 20px;
  }

  .c-testimonial__author-name {
    font-family: ${FONT.BEBAS_NEUE};
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 1;
    color: ${COLOR.ANTIQUE_BRONZE};
  }

  .c-testimonial__author-info {
    font-family: ${FONT.WORK_SANS};
    color: ${COLOR.ANTIQUE_BRONZE};
    font-size: 20px;
  }

  .c-testimonial__author-job,
  .c-testimonial__author-company {
    font-family: ${FONT.BEBAS_NEUE};
  }

  .c-testimonial__author-linkedin {
    font-family: ${FONT.WORK_SANS};
  }

  .c-testimonial__text {
    font-family: ${FONT.WORK_SANS};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 15px;
  }

  .c-testimonial__text--first {
    margin-top: 25px;
  }

  @media ${MEDIA.SMALL_ONLY} {
  }

  @media ${MEDIA.MEDIUM_UP} {
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
