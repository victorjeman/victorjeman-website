import * as React from 'react';
import { NextSeo } from 'next-seo';
import { ISizeModifier } from '@types';
import { FONT } from '@settings/font.settings';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function TermsPage(): React.ReactNode {
  const pageTitle = `React Roadmap Level 1`;

  return (
    <PageLayout>
      <NextSeo title={pageTitle} description={pageTitle} />

      <section className="c-roadmap">
        <PageIntro pageTitle={pageTitle} />

        <Container type={ISizeModifier.xxlarge}>
          <iframe className="c-roadmap_iframe" src="react-roadmap-level-1.pdf"></iframe>
        </Container>
      </section>

      <style jsx global>
        {`
          .c-roadmap {
            color: rgba(41, 41, 41, 1);
            font-family: ${FONT.IBM_PLEX};
            font-weight: 400;
          }

          h2 {
            margin-top: 2rem;
            margin-bottom: 1.2rem;
            text-
          }

         .c-roadmap_iframe {
          width: 100%;
          height: 100vh;
         }
        `}
      </style>
    </PageLayout>
  );
}
