import * as React from 'react';
import matter from 'gray-matter';

import { IPost } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { Post } from '@components/post/Post/Post';

interface Props1 {
  post: IPost;
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

export default function Blog({ post }: Props1): React.ReactNode {
  return (
    <PageLayout>
      <Post post={post} />
    </PageLayout>
  );
}

export async function getStaticProps({ params }: Props2): Promise<{ props: Props1 }> {
  const post = matter(ReadService.readFile({ dataPath: `data/posts/${params.slug}.md` }));
  delete post.orig;

  return {
    props: { post },
  };
}

export async function getStaticPaths(): Promise<Props3> {
  const posts = ReadService.readFiles({ dataPath: 'data/posts' });

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
