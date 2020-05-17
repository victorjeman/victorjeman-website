import css from 'styled-jsx/css';

import { MEDIA } from '../../common/settings/media.settings';
import { FONT } from '../../common/settings/font.settings';
import { COLOR } from '../../common/settings/color.settings';

export default css`
  .c-page-navigation__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .c-page-navigation__menu {
    display: flex;
  }

  .c-page-navigation__menu-link {
    padding: 5px 10px;
    text-decoration: none;
    font-size: 16px;
    text-transform: uppercase;
    font-family: ${FONT.WORK_SANS};
    color: ${COLOR.GABLE_GREEN};
  }

  @media ${MEDIA.MOBILE} {
  }

  @media ${MEDIA.TABLET} {
  }

  @media ${MEDIA.DESKTOP} {
  }
`;
