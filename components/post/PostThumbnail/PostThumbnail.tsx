import * as React from 'react';

import style from './PostThumbnail.style';

import { ISizeModifier, IPostThumbnail } from '@types';

import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';

export const PostThumbnail = ({ thumbnail, title, slug, reading }: IPostThumbnail): JSX.Element => (
  <a href={`/post/${slug}`} className="c-post-thumbnail">
    <CardSpecial type={ISizeModifier.small}>
      <div
        className="c-post-thumbnail__thumbnail"
        style={{ backgroundImage: `url(${thumbnail})` }}
      ></div>
    </CardSpecial>

    <h2 className="c-post-thumbnail__title">{title}</h2>
    <p className="c-post-thumbnail__reading">{reading.text}</p>

    <style jsx>{style}</style>
  </a>
);
