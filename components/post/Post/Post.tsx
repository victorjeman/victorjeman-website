import * as React from 'react';

import { FacebookShareButton, FacebookIcon } from 'react-share';

import { ISizeModifier, IPost } from '@types';

import { Container } from '@components/common/Container/Container';
import { PostContent } from '@components/post/PostContent/PostContent';
import { PostHero } from '@components/post/PostHero/PostHero';

interface Props {
  post: IPost;
}

export const Post = ({ post }: Props): JSX.Element => (
  <section>
    <FacebookShareButton
      url={`https://victorjeman.com/blog/${post.data.slug}`}
      quote={post.data.title}
      className="Demo__some-network__share-button"
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>

    <Container type={ISizeModifier.small}>
      <PostHero post={post} />
      <PostContent content={post.content} />
    </Container>
  </section>
);
