import * as React from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { NextSeo } from 'next-seo';

import { IPosts, ISizeModifier } from '@types';

import { MEDIA } from '@settings/media.settings';

import { ReadService } from '@services/Read/Read.service';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PostThumbnail } from '@components/post/PostThumbnail/PostThumbnail';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function PostsPage({ posts }: IPosts): React.ReactNode {
  const pageTitle = `Blog`;
  const pageDescription = `Ideas that will help you with your web development journey and not only.`;

  return (
    <PageLayout>
      <NextSeo title={'Victor JEMAN | Blog | Front-End Stories'} description={pageDescription} />

      <section className="c-posts">
        <PageIntro pageTitle={pageTitle} pageDescription={pageDescription} />

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
                  type="blog"
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
            padding-bottom: 2rem;
          }

          @media ${MEDIA.MEDIUM_UP} {
            .c-posts__container {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
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
