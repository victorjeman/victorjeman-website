import * as React from 'react';
import style from './PostThumbnail.style';

interface Props {
  thumbnail: string;
  title: string;
  slug: string;
}

export const PostThumbnail = ({ thumbnail, title, slug }: Props): JSX.Element => (
  <article className="c-post-thumbnail">
    <img className="c-post-thumbnail__thumbnail" src={thumbnail} alt={title} />
    <h2 className="c-post-thumbnail__title">{title}</h2>
    <a href={`/post/${slug}`}>Read</a>

    <style jsx>{style}</style>
  </article>
);
