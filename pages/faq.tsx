import * as React from 'react';
import { NextSeo } from 'next-seo';

import { ISizeModifier } from '@types';
import { FONT } from '@settings/font.settings';
import { MEDIA } from '@settings/media.settings';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function FAQPage(): React.ReactNode {
  const pageTitle = `FAQ`;
  const pageDescription = `Web Development Resources that help you to become a great Web Developer. Articles, homework, and more to come.`;

  return (
    <PageLayout>
      <NextSeo title={pageTitle} description={pageDescription} />

      <Container type={ISizeModifier.small} padding="0">
        <section className="c-faq">
          <PageIntro pageTitle={pageTitle} pageDescription={pageDescription} />

          <img
            className="c-faq__image"
            src="/images/random/faq.jpg"
            alt="A cat that thinks about web development."
          />

          <h2>What is the purpose of this website?</h2>

          <p>The purpose of this website is to give something back to the community.</p>
          <p>
            I’ll use my experience as a web developer to build learning materials for everyone
            interested. It’s also an enormous learning experience for me because I’m leaving my
            comfort zone and it scares the hell out of me.
          </p>

          <h2>What is the future for victorjeman.com</h2>

          <p>For 2021 my goal is to:</p>

          <ul>
            <li>
              create 12 <a href="/labs">labs</a> that will help developers to enhance their skills
            </li>
            <li>
              write 48 <a href="/blog">article</a>
            </li>
            <li>get over the youtube fear and start making video tutorials</li>
            <li>other things between</li>
          </ul>

          <p>
            I have a more extensive roadmap for 15 years ahead. I’m still working on it, but I’ll
            share it with you once I figure it out some points.
          </p>

          <h2>Do you make money out of this?</h2>

          <p>
            No, I’m spending at the moment. This is a personal project which hopefully will bring
            value to web developers and not only.
          </p>

          <p>
            At some point, I’ll add a plugin that will allow you to “buy me a coffee” if you like
            the content.{' '}
            <strong>Making money is not a priority right now; making quality content is.</strong>
          </p>

          <h2>What’s the best way to contact you?</h2>

          <p>
            If you have a homework idea or just want to say hello. Send me a message on{' '}
            <a href="https://www.linkedin.com/in/victorjeman" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>

          <h2>Can I contribute?</h2>

          <p>
            If you have an idea for a cool learning project that can be done in 1-4 weeks, let me
            know. If it’s something interesting I’ll convert it into a Figma design and more people
            can benefit from it.
          </p>

          <h2>Can I redistribute the content?</h2>

          <p>
            No, you can not redistribute any of the content on this website. You can use it for
            personal use (tutorial, portfolio,..) or share the link to the content.
          </p>
        </section>
      </Container>

      <style jsx global>
        {`
          body {
            background-color: #f9fafb;
          }

          .c-faq {
            color: rgba(41, 41, 41, 1);
            font-family: ${FONT.IBM_PLEX};
            font-weight: 400;
            font-size: 1.1rem;
            background-color: #fff;
            border: 1px solid #e5eaf0;
            margin-top: 30px;
            padding: 0 1.6rem 1.6rem 1.6rem;
          }

          .c-faq__image {
            max-width: 500px;
            margin: 3rem auto;
          }

          .c-faq h2 {
            margin-top: 2rem;
            margin-bottom: 1.2rem;
          }

          .c-faq h3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .c-faq p {
            margin-bottom: 1.3rem;
            line-height: 1.6;
          }

          @media ${MEDIA.SMALL_ONLY} {
            .c-faq {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
        `}
      </style>
    </PageLayout>
  );
}
