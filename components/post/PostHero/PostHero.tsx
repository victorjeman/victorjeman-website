import * as React from 'react';
import readingTime from 'reading-time';

import { IPost } from '@types';

import { Image } from '@components/common/Image/Image';

import style from './PostHero.style';

interface Props {
  post: IPost;
}

export const PostHero = ({ post }: Props): JSX.Element => {
  const { content, data } = post;
  const { published, updated, title, hero } = data;
  const path = hero.slice(0, hero.length - 1);
  const index = Number(hero.slice(hero.length - 1, hero.length));
  const reading = readingTime(content).text;

  return (
    <div className="c-post-hero">
      <h1 className="c-post-hero__title" id="title">
        {title}
      </h1>

      <div className="c-post-hero__info">
        <p className="c-post-hero__info-item">{published}</p>

        {updated && <p className="c-post-hero__info-item">(updated: {updated})</p>}

        <p className="c-post-hero__info-item">{reading}</p>
      </div>

      <Image path={path} index={index} alt={title} height="600" />

      <style jsx global>
        {style}
      </style>
    </div>
  );
};
