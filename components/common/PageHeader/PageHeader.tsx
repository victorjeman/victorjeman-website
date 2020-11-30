import * as React from 'react';

import Head from 'next/head';

interface Props {
  title: string;
}

export const PageHeader = ({ title }: Props): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>

      <link rel="preconnect" href="https://fonts.gstatic.com" />

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
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&display=swap"
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
