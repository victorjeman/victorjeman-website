import * as React from 'react';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';

import { IHomeworks, ISizeModifier } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { HomeworkThumbnail } from '@components/homework/HomeworkThumbnail/HomeworkThumbnail';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function HomeworkPage({ homeworks }: IHomeworks): React.ReactNode {
  const pageTitle = `Labs`;
  const pageDescription = `Test your might! A challenging way to improve your web development skills. </br></br> Read more about labs <a href="/blog/how-to-use-the-labs">here</a>.`;

  return (
    <PageLayout>
      <NextSeo
        title={'Victor JEMAN | Labs | Improve Your Front-End Skills'}
        description={pageDescription}
      />

      <section className="c-homeworks">
        <PageIntro pageTitle={pageTitle} pageDescription={pageDescription} />

        <Container type={ISizeModifier.xlarge}>
          {homeworks.map((homework, index) => {
            const { title, slug, thumbnail, summary } = matter(homework).data;

            return (
              <HomeworkThumbnail
                key={`homework-thumbnail-${index}`}
                title={title}
                slug={slug}
                thumbnail={thumbnail}
                summary={summary}
              />
            );
          })}
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

export async function getStaticProps(): Promise<{ props: IHomeworks }> {
  const homeworks = ReadService.readFiles({ dataPath: 'data/homework/content' });

  return {
    props: {
      homeworks,
    },
  };
}
