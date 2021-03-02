import css from 'styled-jsx/css';

export default css.global`
  body {
    font-size: 16px;
  }

  .c-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  picture,
  img {
    width: 100%;
  }

  *:focus,
  a:active,
  a:active:focus {
    outline: 3px dotted #175375;
    outline-offset: 3px;
  }
`;
