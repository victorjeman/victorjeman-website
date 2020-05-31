import css from 'styled-jsx/css';

export default css`
  .c-menuicon {
    display: block;
    cursor: pointer;
    color: #000;
    transform: rotate(0deg);
    transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .c-menuicon__bar {
    transform-origin: 50% 50%;
    transition: transform 0.25s ease-in-out;
    fill: none;
    stroke: currentColor;
    stroke-width: 3;
    stroke-linecap: round;
  }
`;
