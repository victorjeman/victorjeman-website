import * as React from 'react';

const LogoFullSvg = require('../../../public/images/logo/logo-small-3.svg') as string;
import PageNavigationStyle from './PageNavigation.style';
import { MenuIcon } from '@components/common/MenuIcon';

export const PageNavigation: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const onClickHandler = () => {
    setOpen(!open);
  };

  return (
    <nav className="c-page-navigation">
      <div className="c-page-navigation__container [ c-container ]">
        <div className="c-page-navigation__logo">
          <LogoFullSvg />
        </div>

        <div className="c-page-navigation__toggle" onClick={onClickHandler}>
          <MenuIcon />
        </div>

        <ul
          className={`c-page-navigation__menu [ c-list ] ${
            open ? 'c-page-navigation__menu--open' : ''
          } `}
        >
          <li className="c-page-navigation__menu-item">
            <a className="c-page-navigation__menu-link" href="/">
              Landing
            </a>
          </li>

          <li className="c-page-navigation__menu-item">
            <a className="c-page-navigation__menu-link" href="/projects">
              Projects
            </a>
          </li>
        </ul>
      </div>

      <style jsx> {PageNavigationStyle}</style>
    </nav>
  );
};
