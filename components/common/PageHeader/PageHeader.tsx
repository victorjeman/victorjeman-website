import * as React from 'react';

import Head from 'next/head';

export const PageHeader = (): JSX.Element => (
  <Head>
    <title>Page title</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
    />

    <meta charSet="UTF-8" />
    <meta content="width=device-width,initial-scale=1.0,minimum-scale=1.0" name="viewport" />
  </Head>
);
