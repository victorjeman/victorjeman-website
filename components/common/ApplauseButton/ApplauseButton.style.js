import css from 'styled-jsx/css';

export default css`
  applause-button {
    position: relative;
    cursor: pointer;
  }
  applause-button .style-root {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  applause-button .style-root:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: ' ';
    display: block;
    border-radius: 50%;
    border: 1px solid;
  }
  applause-button .style-root:hover:after:not(.clap-limit-exceeded) {
    border-color: inherit;
  }
  applause-button.loading {
    opacity: 0.5;
  }
  applause-button .shockwave {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
  }
  applause-button svg {
    position: absolute;
    width: 60%;
    height: 60%;
    margin-left: 20%;
    margin-top: 20%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    stroke: none;
    overflow: visible !important;
  }
  applause-button svg g.flat {
    visibility: hidden;
  }
  applause-button svg g.outline {
    visibility: visible;
  }
  applause-button.clap-limit-exceeded {
    cursor: inherit;
  }
  applause-button.clap-limit-exceeded div {
    fill: gray !important;
    stroke: gray !important;
    color: gray !important;
  }
  applause-button.clapped svg g.flat {
    visibility: visible;
  }
  applause-button.clapped svg g.outline {
    visibility: hidden;
  }
  applause-button .count-container {
    position: absolute;
    top: -40%;
    width: 100%;
    color: gray;
    user-select: none;
  }
  applause-button .count-container .count {
    text-align: center;
  }
  applause-button g.sparkle circle {
    opacity: 0;
    stroke-width: 0;
  }
  applause-button g.sparkle g:nth-child(1) {
    transform: rotate(0deg) translateX(10px);
  }
  applause-button g.sparkle g:nth-child(2) {
    transform: rotate(72deg) translateX(10px);
  }
  applause-button g.sparkle g:nth-child(3) {
    transform: rotate(144deg) translateX(10px);
  }
  applause-button g.sparkle g:nth-child(4) {
    transform: rotate(216deg) translateX(10px);
  }
  applause-button g.sparkle g:nth-child(5) {
    transform: rotate(288deg) translateX(10px);
  }
  applause-button:hover:not(.clapped) .shockwave {
    animation-name: shockwave;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
  }
  applause-button.clap {
    animation-name: pulse;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
  applause-button.clap .sparkle circle {
    animation-name: explode;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
  applause-button.clap .count {
    animation-name: hideThenShow;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
  }
  @keyframes explode {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(25px);
    }
  }
  @keyframes shockwave {
    0% {
      transform: scale(1);
      box-shadow: 0 0 2px;
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
      box-shadow: 0 0 50px, inset 0 0 10px;
    }
  }
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes hideThenShow {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    20% {
      opacity: 0;
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(10px);
    }
    80% {
      transform: translateY(10px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
