import css from 'styled-jsx/css';

import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { COLOR } from '@settings/color.settings';

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
    padding: 0.5rem 0;
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-family: ${FONT.WORK_SANS};
    font-weight: 500;
    color: ${COLOR.GABLE_GREEN};
    position: relative;
  }

  .c-page-navigation__menu-link:after {
    content: '';
    height: 3px;
    background-color: ${COLOR.GUN_POWDER};
    position: absolute;
    bottom: 2px;
    left: 5px;
    right: 5px;
    display: none;
  }

  .c-page-navigation__menu-link.selected:after,
  .c-page-navigation__menu-link:hover:after {
    display: block;
  }

  @media ${MEDIA.SMALL_ONLY} {
    .c-page-navigation__container {
      align-items: flex-start;
      padding-top: 15px;
      padding-bottom: 5px;
    }

    .c-page-navigation__logo {
      z-index: 100;
    }

    .c-page-navigation__toggle {
      z-index: 101;
    }

    .c-page-navigation__toggle:hover {
      cursor: pointer;
    }

    .c-page-navigation__menu {
      visibility: hidden;
      pointer-events: none;
      position: fixed;
      z-index: 99;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: red;
      background: linear-gradient(150.86deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%),
        #ebecf0;
      background-blend-mode: soft-light, normal;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .c-page-navigation__menu--open {
      visibility: visible;
      pointer-events: all;
    }

    .c-page-navigation__menu-item {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    .c-page-navigation__menu-link {
      font-size: 1.2rem;
    }
  }

  @media ${MEDIA.MEDIUM_UP} {
    .c-page-navigation__menu-item {
      margin-left: 1rem;
    }

    .c-page-navigation__logo {
      position: relative;
      top: 15px;
    }
  }

  @media ${MEDIA.LARGE_UP} {
  }
`;
