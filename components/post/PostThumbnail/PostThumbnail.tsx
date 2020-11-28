import * as React from 'react';
import style from './PostThumbnail.style';

interface Props {
  thumbnail: string;
  title: string;
  slug: string;
  reading: { text: string };
}

export const PostThumbnail = ({ thumbnail, title, slug, reading }: Props): JSX.Element => (
  <a href={`/post/${slug}`} className="c-post-thumbnail">
    <img className="c-post-thumbnail__thumbnail" src={thumbnail} alt={title} />
    <h2 className="c-post-thumbnail__title">{title}</h2>
    <p className="c-post-thumbnail__reading">{reading.text}</p>

    <style jsx>{style}</style>
  </a>
);
