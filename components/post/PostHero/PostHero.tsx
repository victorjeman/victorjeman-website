import * as React from 'react';
import readingTime from 'reading-time';

import { IPost, ISizeModifier } from '@types';

import { Image } from '@components/common/Image/Image';
import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';

import style from './PostHero.style';

interface Props {
  post: IPost;
}

export const PostHero = ({ post }: Props): JSX.Element => {
  const { content, data } = post;
  const { published, updated, title, thumbnail } = data;
  const path = thumbnail.slice(0, thumbnail.length - 1);
  const index = Number(thumbnail.slice(thumbnail.length - 1, thumbnail.length));
  const reading = readingTime(content).text;

  return (
    <div className="c-post-hero">
      <h1 className="c-post-hero__title">{title}</h1>

      <div className="c-post-hero__info">
        <p className="c-post-hero__info-item">{published}</p>

        {updated && <p className="c-post-hero__info-item">(updated: {updated})</p>}

        <p className="c-post-hero__info-item">{reading}</p>
      </div>

      <CardSpecial type={ISizeModifier.medium}>
        <Image path={path} index={index} alt={title} />
      </CardSpecial>

      <style jsx>{style}</style>
    </div>
  );
};
