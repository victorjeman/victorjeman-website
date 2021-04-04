import * as React from 'react';

import { ISizeModifier, IPost } from '@types';
import { useWindowSize } from '@hooks/useWindowSize';
import { UtilService } from '@services/Util/Util';

import { Container } from '@components/common/Container/Container';
import { PostContent } from '@components/post/PostContent/PostContent';
import { PostHero } from '@components/post/PostHero/PostHero';
import { Socials } from '@components/common/Socials/Socials';

import style from './Post.style';

export const Post = ({ post }: { post: IPost }): JSX.Element => {
  const title = post.data.title || '';
  const shareUrl = `https://victorjeman.com/blog/${post.data.slug}`;
  useWindowSize();

  React.useEffect(() => {
    UtilService.initDisqus();
  }, []);

  return (
    <React.Fragment>
      <Container type={ISizeModifier.small}>
        <div id="disqus_thread"></div>
      </Container>

      <Container type={ISizeModifier.large}>
        <PostHero post={post} />

        <Socials title={title} shareUrl={shareUrl} />
      </Container>

      <PostContent content={post.content} category={post.data.category} />

      <Socials title={title} shareUrl={shareUrl} />

      <style jsx>{style}</style>
    </React.Fragment>
  );
};
