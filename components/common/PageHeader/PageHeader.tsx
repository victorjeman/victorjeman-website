import * as React from 'react';

import Head from 'next/head';

export const PageHeader = ({ title }): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>

      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital@0;1&display=swap"
        rel="stylesheet"
      />

      <meta charSet="UTF-8" />

      <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport" />
    </Head>
  );
};
