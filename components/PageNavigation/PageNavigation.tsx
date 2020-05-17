const LogoFullSvg = require('../../public/images/logo/LogoFull.svg') as string;
import PageNavigationStyle from './PageNavigation.style';

export const PageNavigation = () => (
  <nav className="c-page-navigation">
    <div className="c-page-navigation__container [ c-container ]">
      <div className="c-page-navigation__logo">
        <LogoFullSvg />
      </div>

      <ul className="c-page-navigation__menu  [ c-list ]">
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
