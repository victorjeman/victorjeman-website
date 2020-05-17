import * as React from 'react';
import '../public/css/normalize.css';
import '../public/scss/index.scss';

interface Props {
  Component: React.ComponentType<{}>;
  pageProps: React.PropsWithChildren<Props>;
}

const App: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
