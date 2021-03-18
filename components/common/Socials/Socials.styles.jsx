import css from 'styled-jsx/css';

export default css`
  .c-socials {
    display: flex;
    margin-top: 2rem;
  }

  .c-socials {
    justify-content: center;
  }

  .c-socials__item {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  .c-socials__item:last-of-type {
    min-width: 180px;
  }

  .c-socials--sticky {
    position: absolute;
    right: -10rem;
    top: 1rem;
    flex-direction: column;
  }

  .c-socials--sticky .c-socials__item {
    margin-bottom: 0.2rem;
  }
`;
