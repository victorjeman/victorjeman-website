import * as React from 'react';

import style from './PostThumbnail.style';

import { ISizeModifier, IPostThumbnail } from '@types';

import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';
import { Image } from '@components/common/Image/Image';

export const PostThumbnail = ({
  thumbnail,
  title,
  slug,
  reading,
  type,
}: IPostThumbnail): JSX.Element => {
  const path = thumbnail.slice(0, thumbnail.length - 1);
  const index = Number(thumbnail.slice(thumbnail.length - 1, thumbnail.length));

  return (
    <a href={`/${type}/${slug}`} className="c-post-thumbnail">
      <CardSpecial type={ISizeModifier.small}>
        <Image path={path} index={index} alt="Victor JEMAN" height="300" width="300" />
      </CardSpecial>

      <h2 className="c-post-thumbnail__title">{title}</h2>
      <p className="c-post-thumbnail__reading">{reading.text}</p>

      <style jsx>{style}</style>
    </a>
  );
};
