import MenuIconStyle from './MenuIcon.style';

export const MenuIcon = () => (
  <svg className="c-menuicon" xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 40">
    <title>Toggle Menu</title>
    <g>
      <line className="c-menuicon__bar" x1="0" y1="16.5" x2="35" y2="16.5"></line>
      <line className="c-menuicon__bar" x1="0" y1="24.5" x2="35" y2="24.5"></line>
      <line className="c-menuicon__bar" x1="0" y1="32.5" x2="35" y2="32.5"></line>
    </g>

    <style jsx>{MenuIconStyle}</style>
  </svg>
);
