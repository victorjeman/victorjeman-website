import * as React from 'react';

import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

import { ISizeModifier, IPost } from '@types';

import style from './Post.style';

import { Container } from '@components/common/Container/Container';
import { PostContent } from '@components/post/PostContent/PostContent';
import { PostHero } from '@components/post/PostHero/PostHero';

interface Props {
  post: IPost;
}

export const Post = ({ post }: Props): JSX.Element => {
  const title = post.data.title;
  const shareUrl = `https://victorjeman.com/blog/${post.data.slug}`;

  return (
    <Container type={ISizeModifier.small}>
      <PostHero post={post} />

      <div className="c-post-share">
        <div className="c-post-share__item">
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={42} />
          </LinkedinShareButton>
        </div>

        <div className="c-post-share__item">
          <FacebookShareButton url={shareUrl} quote={post.data.title}>
            <FacebookIcon size={42} />
          </FacebookShareButton>
        </div>

        <div className="c-post-share__item">
          <TwitterShareButton url={shareUrl} title={title}>
            <TwitterIcon size={42} />
          </TwitterShareButton>
        </div>

        <div className="c-post-share__item">
          <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
            <WhatsappIcon size={42} />
          </WhatsappShareButton>
        </div>
      </div>

      <PostContent content={post.content} />
      <style jsx>{style}</style>
    </Container>
  );
};
