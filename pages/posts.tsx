import * as React from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import { IPosts, ISizeModifier } from '@types';

import { MEDIA } from '@settings/media.settings';

import { ReadService } from '@services/Read/Read.service';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PostThumbnail } from '@components/post/PostThumbnail/PostThumbnail';

export default function PostsPage({ posts }: IPosts): React.ReactNode {
  return (
    <PageLayout title="Blog">
      <section className="c-posts">
        <Container type={ISizeModifier.xlarge}>
          <div className="c-posts__container">
            {posts.map((post, index) => {
              const { title, slug, thumbnail } = matter(post).data;
              const reading = readingTime(matter(post).content);

              return (
                <PostThumbnail
                  key={`post-${index}`}
                  thumbnail={thumbnail}
                  title={title}
                  slug={slug}
                  reading={reading}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <style jsx>
        {`
          .c-posts {
            margin-top: 1rem;
            padding-top: 2rem;
            padding-bottom: 2rem;
          }

          @media ${MEDIA.MEDIUM_UP} {
            .c-posts__container {
              display: flex;
              justify-content: space-around;
            }
          }
        `}
      </style>
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
