import * as React from 'react';
import matter from 'gray-matter';

import { IHomeworks } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';

export default function HomeworksPage({ homeworks }: IHomeworks): React.ReactNode {
  return (
    <PageLayout>
      {homeworks.map((homework, index) => {
        const { title, slug } = matter(homework).data;
        return (
          <article key={`homework-${index}`}>
            <h2>{title}</h2>
            <a href={`/homework/${slug}`}>Read</a>
          </article>
        );
      })}
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: IHomeworks }> {
  const homeworks = ReadService.readFiles({ dataPath: 'data/homeworks' });

  return {
    props: {
      homeworks,
    },
  };
}
