import * as React from 'react';

import Head from 'next/head';

export const PageHeader = (): JSX.Element => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />

      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#A03232" />
      <meta name="theme-color" content="#A03232" />
      <meta charSet="UTF-8" />
      <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport" />

      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&family=Bebas+Neue&family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Titillium+Web:wght@600&family=Merriweather:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <div id="fb-root"></div>

      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0&appId=436744724067170&autoLogAppEvents=1"
        nonce="Oy4RV0xi"
      ></script>
    </Head>
  );
};
