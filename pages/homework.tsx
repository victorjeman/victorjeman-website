import * as React from 'react';
import matter from 'gray-matter';

import { IHomeworks, ISizeModifier } from '@types';

import { MEDIA } from '@settings/media.settings';

import { ReadService } from '@services/Read/Read.service';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { HomeworkThumbnail } from '@components/homework/HomeworkThumbnail/HomeworkThumbnail';

export default function HomeworkPage({ homeworks }: IHomeworks): React.ReactNode {
  return (
    <PageLayout title="Homework">
      <section className="c-homeworks">
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
            margin-top: 1rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        `}
      </style>
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: IHomeworks }> {
  const homeworks = ReadService.readFiles({ dataPath: 'data/homework' });

  return {
    props: {
      homeworks,
    },
  };
}
