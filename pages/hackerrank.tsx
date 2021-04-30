import * as React from 'react';
import { NextSeo } from 'next-seo';

import { ISizeModifier } from '@types';
import { FONT } from '@settings/font.settings';
import { MEDIA } from '@settings/media.settings';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function FAQPage(): React.ReactNode {
  const pageTitle = `HackerRank`;
  const pageDescription = `Level up your programming skills.`;

  return (
    <PageLayout>
      <NextSeo title={pageTitle} description={pageDescription} />

      <Container type={ISizeModifier.xlarge} padding="0">
        <section className="c-hackerrank">
          <PageIntro pageTitle={pageTitle} pageDescription={pageDescription} />

          <iframe
            className="c-hackerrank__intro"
            height="394"
            src="https://www.youtube.com/embed/pGvM--i-Zi4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div className="c-hackerrank__container">
            <article className="c-hackerrank__video">
              <iframe
                height="250"
                src="https://www.youtube.com/embed/yCj0ZUtQgy0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <h2 className="c-hackerrank__video-title">
                HackerRank | Interview Preparation Kit | Counting Valleys | Rezolvare
              </h2>
            </article>
          </div>
        </section>
      </Container>

      <style jsx global>
        {`
          body {
            background-color: #f9fafb;
          }

          .c-hackerrank {
            color: rgba(41, 41, 41, 1);
            font-family: ${FONT.IBM_PLEX};
            font-weight: 400;
            font-size: 1.1rem;
            background-color: #fff;
            border: 1px solid #e5eaf0;
            margin-top: 30px;
            padding: 0 1.6rem 1.6rem 1.6rem;
          }

          .c-hackerrank__intro {
            max-width: 700px;
            width: 100%;
            display: block;
            margin-right: auto;
            margin-left: auto;
          }

          .c-hackerrank__container {
            margin-top: 3.5rem;
            display: flex;
            flex-wrap: wrap;
          }

          .c-hackerrank__video {
            width: 45%;
            background-color: #fff;
            border: 1px solid #e5eaf0;
            border-radius: 0.3rem;
            padding: 1rem;
          }

          .c-hackerrank__video-title {
            font-family: ${FONT.IBM_PLEX};
            font-size: 1.2rem;
          }

          .c-hackerrank__video iframe {
            width: 100%;
          }

          @media ${MEDIA.SMALL_ONLY} {
            .c-hackerrank {
              padding-left: 1rem;
              padding-right: 1rem;
            }

            .c-hackerrank__container {
              display: block;
            }

            .c-hackerrank__video {
              width: 100%;
            }
          }
        `}
      </style>
    </PageLayout>
  );
}
