import * as React from 'react';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { NextSeo } from 'next-seo';

import { IPosts, ISizeModifier } from '@types';
import { MEDIA } from '@settings/media.settings';
import { FONT } from '@settings/font.settings';
import { ReadService } from '@services/Read/Read.service';

import { Container } from '@components/common/Container/Container';
import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { PostThumbnail } from '@components/post/PostThumbnail/PostThumbnail';
import { PageIntro } from '@components/common/PageIntro/PageIntro';

export default function BlogPage({ posts }: IPosts): React.ReactNode {
  const pageTitle = `My Little Digital Garden`;
  const pageDescription = `Ideas that will help you with your web development journey and not only.`;

  const [filter, setFilter] = React.useState('all');
  const [categories] = React.useState([
    { name: 'all', status: 1 },
    { name: 'stories', status: 0 },
    { name: 'news', status: 0 },
    { name: 'css', status: 0 },
    { name: 'tips', status: 0 },
  ]);

  return (
    <PageLayout>
      <NextSeo title={'Victor JEMAN | Blog | Front-End Stories'} description={pageDescription} />

      <section className="c-posts">
        <PageIntro pageTitle={pageTitle} pageDescription={pageDescription} />

        <Container type={ISizeModifier.small}>
          <ul className="c-categories">
            {categories.map((category, index) => (
              <li className="c-categories__item" key={index}>
                <button
                  className={`c-category c-category--${category.status}`}
                  onClick={() => {
                    setFilter(category.name);

                    categories.map((item) => {
                      item.status = 0;
                      if (item.name === category.name) {
                        item.status = 1;
                      }
                    });
                  }}
                >
                  #{category.name}
                </button>
              </li>
            ))}
          </ul>
        </Container>

        <div className="c-posts__container">
          {posts
            .sort((a, b) => Number(matter(a).data.index) - Number(matter(b).data.index))
            .filter((post) => {
              if (filter === 'all') {
                return true;
              } else {
                const { category } = matter(post).data;
                return category === filter;
              }
            })
            .map((post, index) => {
              const { title, slug, thumbnail, category } = matter(post).data;
              const reading = readingTime(matter(post).content);

              return (
                <PostThumbnail
                  key={`post-${index}`}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  slug={slug}
                  type="blog"
                  reading={reading}
                />
              );
            })}
        </div>
      </section>

      <style jsx>
        {`
          .c-posts {
            padding-bottom: 2rem;
          }

          .c-posts__container {
            max-width: 1300px;
            margin-right: auto;
            margin-left: auto;
          }

          .c-categories {
            list-style: none;
            padding: 0;
            margin: 0 0 2.5rem 0;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            font-family: ${FONT.BEBAS_NEUE};
          }

          .c-category {
            background-color: transparent;
            border: none;
            border-bottom: 2px solid transparent;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            color: #de7376;
            padding: 0;
            letter-spacing: 1px;
            font-size: 1.1rem;
          }

          .c-category:after {
            content: '';
            display: block;
            margin-right: auto;
            margin-left: auto;
            width: 20px;
            height: 3px;
          }

          .c-category:hover {
            cursor: pointer;
          }

          .c-category:hover:after,
          .c-category--1:after {
            background-color: #de7376;
          }

          @media ${MEDIA.MEDIUM_UP} {
            .c-posts__container {
              display: flex;
              flex-wrap: wrap;
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
