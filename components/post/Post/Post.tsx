import * as React from 'react';

import { ISizeModifier, IPost, IPostData } from '@types';

import { Container } from '@components/common/Container/Container';
import { PostContent } from '@components/post/PostContent/PostContent';
import { PostHero } from '@components/post/PostHero/PostHero';

interface Props {
  post: IPost;
}

export const Post = ({ post }: Props): JSX.Element => (
  <Container type={ISizeModifier.large}>
    <PostHero data={post.data} />
    <PostContent content={post.content} />
  </Container>
);
