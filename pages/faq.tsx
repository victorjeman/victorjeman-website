import * as React from 'react';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';

import { IHomeworks, ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function FAQPage({ homeworks }: IHomeworks): React.ReactNode {
  const pageTitle = `Victor JEMAN | FAQ`;
  const pageDescription = `Web Development Resources that help you to become a great Web Developer. Articles, homework, and more to come.`;

  return (
    <PageLayout>
      <NextSeo title={pageTitle} description={pageDescription} />

      <section className="c-faq">
        <PageIntro pageTitle={pageTitle} pageDescription={pageDescription} />

        <Container type={ISizeModifier.xlarge}>
          <h2>What is the purpose of this website?</h2>

          <h2>What is the future for victorjeman.com</h2>

          <p>There are many things I want to do, but here are some of them:</p>

          <h2>Do you make money out of this?</h2>

          <p>
            No, I’m spending at the moment. This is a personal project which hopefully will bring
            some value to web developers and not only.
          </p>

          <p>
            At some point, I’ll add a plugin that will allow you to “buy me a coffee” if you will
            like the content.
          </p>

          <h2>What’s the best way to contact you?</h2>

          <p>
            You have an idea about homework or just want to say hello? Send me a message on
            <a href="https://www.linkedin.com/in/victorjeman" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>

          <h2>Can I redistribute the content?</h2>

          <p>
            No, you can not redistribute any of the content on this website. You can use it for
            personal use (tutorial, portfolio,..) or share the link to the content.
          </p>
        </Container>
      </section>

      <style jsx>
        {`
          .c-homeworks {
            padding-bottom: 2rem;
          }
        `}
      </style>
    </PageLayout>
  );
}
