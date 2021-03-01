import * as React from 'react';

import style from './HomeworkThumbnail.style';

import { ISizeModifier, IHomeworkThumbnail } from '@types';

import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';

export const HomeworkThumbnail = ({
  thumbnail,
  title,
  slug,
  summary,
}: IHomeworkThumbnail): JSX.Element => {
  const folder = thumbnail.slice(0, thumbnail.length - 1);
  const index = Number(thumbnail.slice(thumbnail.length - 1, thumbnail.length));

  return (
    <a href={`/labs/${slug}`} className="c-homework-thumbnail">
      <CardSpecial type={ISizeModifier.small}>
        <div
          className="c-homework-thumbnail__thumbnail"
          style={{ backgroundImage: `url(images/labs/${folder}/${folder}${index}.jpg)` }}
        ></div>
      </CardSpecial>

      <h2 className="c-homework-thumbnail__title">{title}</h2>

      <p className="c-homework-thumbnail__summary">{summary}</p>

      <style jsx>{style}</style>
    </a>
  );
};
