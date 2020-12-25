import * as React from 'react';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';

import { IPost, IMeta } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { Post } from '@components/post/Post/Post';

interface Props1 {
  post: IPost;
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

export default function PostPage({ post, meta }: Props1): React.ReactNode {
  return (
    <PageLayout title={post.data.title || ''}>
      <NextSeo openGraph={meta} />
      <Post post={post} />
    </PageLayout>
  );
}

export async function getStaticProps({ params }: Props2): Promise<{ props: Props1 }> {
  const post = JSON.parse(
    JSON.stringify(
      matter(ReadService.readFile({ dataPath: `data/posts/content/${params.slug}.md` })),
    ),
  );
  const meta = ReadService.readFile({ dataPath: `data/posts/meta/${params.slug}.json` });
  delete post.orig;

  return {
    props: { post, meta },
  };
}

export async function getStaticPaths(): Promise<Props3> {
  const posts = ReadService.readFiles({ dataPath: 'data/posts/content' });

  const paths = posts.map((post: IPost) => ({
    params: {
      slug: `${matter(post).data.slug}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
