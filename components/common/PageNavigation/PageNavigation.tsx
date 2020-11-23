import * as React from 'react';

const LogoFullSvg = require('../../../public/images/logo/logo-small-3.svg') as string;
import style from './PageNavigation.style';

import { MenuIcon } from '@components/common/MenuIcon/MenuIcon';
import { Container } from '@components/common/Container/Container';

import { CustomLink } from '@components/common/CustomLink/CustomLink';

export const PageNavigation: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <nav className="c-page-navigation">
      <Container>
        <div className="c-page-navigation__container">
          <div className="c-page-navigation__logo">
            <a href="/">
              <LogoFullSvg />
            </a>
          </div>

          <div className="c-page-navigation__toggle [ u-show-small-only ]" onClick={onClickHandler}>
            <MenuIcon />
          </div>

          <ul
            className={`c-page-navigation__menu [ c-list ] ${
              open ? 'c-page-navigation__menu--open' : ''
            } `}
          >
            <li className="c-page-navigation__menu-item">
              <CustomLink href="/">
                <a className="c-page-navigation__menu-link">Hello</a>
              </CustomLink>
            </li>

            <li className="c-page-navigation__menu-item">
              <CustomLink href="/posts">
                <a className="c-page-navigation__menu-link">Blog</a>
              </CustomLink>
            </li>

            <li className="c-page-navigation__menu-item">
              <CustomLink href="/homework">
                <a className="c-page-navigation__menu-link">Homework</a>
              </CustomLink>
            </li>

            <li className="c-page-navigation__menu-item">
              <CustomLink href="/testimonials">
                <a className="c-page-navigation__menu-link">Recommendations</a>
              </CustomLink>
            </li>
          </ul>
        </div>
      </Container>

      <style jsx>{style}</style>
      <style jsx global>{`
        @keyframes pulse {
          0% {
            fill: #000;
          }
          50% {
            fill: #de7376;
          }

          100% {
            fill: #ffc25d;
          }
        }

        .c-page-navigation__logo svg path {
          animation: pulse 3s ease infinite alternate;
        }
      `}</style>
    </nav>
  );
};
