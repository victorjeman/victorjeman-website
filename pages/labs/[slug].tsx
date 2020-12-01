import * as React from 'react';
import matter from 'gray-matter';

import { IHomework } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { Homework } from '@components/homework/Homework/Homework';

interface Props1 {
  homework: IHomework;
}

interface Props2 {
  params: {
    slug: string;
  };
}

interface Props3 {
  paths: { params: { slug: string } }[];
  fallback: boolean;
}

export default function HomeworkPage({ homework }: Props1): React.ReactNode {
  return (
    <PageLayout title={homework.data.title || ''}>
      <Homework homework={homework} />
    </PageLayout>
  );
}

export async function getStaticProps({ params }: Props2): Promise<{ props: Props1 }> {
  const homework = matter(ReadService.readFile({ dataPath: `data/homework/${params.slug}.md` }));
  delete homework.orig;

  return {
    props: { homework },
  };
}

export async function getStaticPaths(): Promise<Props3> {
  const homework = ReadService.readFiles({ dataPath: 'data/homework' });

  const paths = homework.map((homework: IHomework) => ({
    params: {
      slug: `${matter(homework).data.slug}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
