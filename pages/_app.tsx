import * as React from 'react';
import '../public/css/normalize.css';
import '../public/scss/index.scss';
import Fonts from '@styles/Fonts.style';
import Elements from '@styles/Elements.style';
import ContainerStyle from '@styles/Container.style';
import Utils from '@styles/Utils.style';

interface Props {
  Component: React.ComponentType<React.ReactNode>;
  pageProps: React.PropsWithChildren<Props>;
}

const App: React.FC<Props> = ({ Component, pageProps }: Props) => {
  return (
    <React.Fragment>
      <Component {...pageProps} />
      <style jsx global>
        {Fonts}
      </style>
      <style jsx global>
        {Elements}
      </style>
      <style jsx global>
        {ContainerStyle}
      </style>
      <style jsx global>
        {Utils}
      </style>
    </React.Fragment>
  );
};

export default App;