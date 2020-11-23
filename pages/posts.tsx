import * as React from 'react';
import matter from 'gray-matter';

import { IPosts } from '@types';

import { ReadService } from '@services/Read/Read.service';

import { PageLayout } from '@components/common/PageLayout/PageLayout';

export default function PostsPage({ posts }: IPosts): React.ReactNode {
  return (
    <PageLayout>
      {posts.map((post, index) => {
        const { title, slug } = matter(post).data;
        return (
          <article key={`post-${index}`}>
            <h2>{title}</h2>
            <a href={`/post/${slug}`}>Read</a>
          </article>
        );
      })}
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: IPosts }> {
  const posts = ReadService.readFiles({ dataPath: 'data/posts/content' });

  return {
    props: {
      posts,
    },
  };
}
