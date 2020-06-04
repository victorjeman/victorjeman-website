import * as React from 'react';

import MenuIconStyle from './MenuIcon.style';

export const MenuIcon: React.FC = () => (
  <span className="c-menu-icon">
    <span className="c-menu-icon__line c-menu-icon__line--1">{''}</span>
    <span className="c-menu-icon__line c-menu-icon__line--2">{''}</span>
    <span className="c-menu-icon__line c-menu-icon__line--3">{''}</span>
    <style jsx>{MenuIconStyle}</style>
  </span>
);
