import * as React from 'react';
import TagManager from 'react-gtm-module';
import dynamic from 'next/dynamic';

import 'modern-css-reset';

import '../public/scss/index.scss';

import Elements from '@styles/Elements.style';
import Utils from '@styles/Utils.style';

interface Props {
  Component: React.ComponentType<React.ReactNode>;
  pageProps: React.PropsWithChildren<Props>;
}

const App: React.FC<Props> = ({ Component, pageProps }: Props) => {
  const tagManagerArgs = {
    gtmId: 'GTM-P9QQFBC',
  };

  React.useEffect(() => {
    const smoothScrollAnchor = require('smooth-scroll-anchor');
    const itShouldInitGtm = window && window.location && window.location.hostname != 'localhost';

    if (itShouldInitGtm) {
      TagManager.initialize(tagManagerArgs);
    }

    smoothScrollAnchor.smoothScrollAnchor({
      behaviour: 'smooth',
      block: 'start',
      offset: 0,
    });
  }, []);

  return (
    <React.Fragment>
      <Component {...pageProps} />

      <style jsx global>
        {Elements}
      </style>

      <style jsx global>
        {Utils}
      </style>
    </React.Fragment>
  );
};

export default App;
