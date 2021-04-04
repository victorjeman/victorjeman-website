import * as React from 'react';
import { DiscussionEmbed } from 'disqus-react';

import { ISizeModifier, IPost } from '@types';
import { useWindowSize } from '@hooks/useWindowSize';
import { UtilService } from '@services/Util/Util';

import { Container } from '@components/common/Container/Container';
import { PostContent } from '@components/post/PostContent/PostContent';
import { PostHero } from '@components/post/PostHero/PostHero';
import { Socials } from '@components/common/Socials/Socials';

import style from './Post.style';

export const Post = ({ post }: { post: IPost }): JSX.Element => {
  const { title, slug } = post.data;
  const shareUrl = `https://victorjeman.com/blog/${slug}`;
  useWindowSize();

  React.useEffect(() => {
    // UtilService.initDisqus();
  }, []);

  return (
    <React.Fragment>
      <Container type={ISizeModifier.small}>
        <DiscussionEmbed
          shortname="victorjeman"
          config={{
            url: shareUrl,
            identifier: slug,
            title: title,
            language: 'zh_TW', //e.g. for Traditional Chinese (Taiwan)
          }}
        />
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
