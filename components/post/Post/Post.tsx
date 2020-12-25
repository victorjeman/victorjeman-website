import * as React from 'react';
import Sticky from 'react-sticky-el';
import { useMediaQuery } from '@react-hook/media-query';

import { ISizeModifier, IPost } from '@types';
import { MEDIA } from 'common/settings/media.settings';
import { useWindowSize } from '@hooks/useWindowSize';

import { Container } from '@components/common/Container/Container';
import { PostContent } from '@components/post/PostContent/PostContent';
import { PostHero } from '@components/post/PostHero/PostHero';
import { Socials } from '@components/common/Socials/Socials';
import { ClientOnly } from '@components/common/ClientOnly/ClientOnly';

import style from './Post.style';

export const Post = ({ post }: { post: IPost }): JSX.Element => {
  const title = post.data.title || '';
  const shareUrl = `https://victorjeman.com/blog/${post.data.slug}`;
  const isMediumDown = useMediaQuery(MEDIA.MEDIUM_DOWN);
  useWindowSize();

  return (
    <div>
      <Container type={ISizeModifier.large}>
        <PostHero post={post} />
      </Container>

      <Container type={ISizeModifier.small}>
        {isMediumDown ? (
          <ClientOnly>
            <Socials title={title} shareUrl={shareUrl} />
          </ClientOnly>
        ) : (
          <ClientOnly>
            <Sticky>
              <Socials title={title} shareUrl={shareUrl} />
            </Sticky>
          </ClientOnly>
        )}

        <PostContent content={post.content} />

        <style jsx>{style}</style>
      </Container>
    </div>
  );
};
