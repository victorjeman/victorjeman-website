import * as React from 'react';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';

import { IHomework, IMeta } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { Homework } from '@components/homework/Homework/Homework';

interface Props1 {
  homework: IHomework;
  meta: IMeta;
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

export default function HomeworkPage({ homework, meta }: Props1): React.ReactNode {
  return (
    <PageLayout>
      <NextSeo openGraph={meta} />
      <Homework homework={homework} />
    </PageLayout>
  );
}

export async function getStaticProps({ params }: Props2): Promise<{ props: Props1 }> {
  const homework = matter(
    ReadService.readFile({ dataPath: `data/homework/content/${params.slug}.md` }),
  );
  const meta = ReadService.readFile({ dataPath: `data/homework/meta/${params.slug}.json` });
  delete homework.orig;

  return {
    props: { homework, meta },
  };
}

export async function getStaticPaths(): Promise<Props3> {
  const homework = ReadService.readFiles({ dataPath: 'data/homework/content' });

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
