import * as React from 'react';

import { IHomework } from '@types';
import { UtilService } from '@services/Util/Util';
import { Image } from '@components/common/Image/Image';

import style from './HomeworkHero.style';

interface Props {
  homework: IHomework;
}

export const HomeworkHero = ({ homework }: Props): JSX.Element => {
  const { data } = homework;
  const { publishedTime = '', modifiedTime = '', version, title, thumbnail } = data;
  const path = thumbnail ? thumbnail.slice(0, thumbnail.length - 1) : '';
  const index = thumbnail ? Number(thumbnail.slice(thumbnail.length - 1, thumbnail.length)) : 0;

  return (
    <section className="c-homework-hero">
      <h1 className="c-homework-hero__title">{data.title}</h1>

      <div className="c-homework-hero__info">
        <p className="c-homework-hero__info-item">
          {UtilService.getFormattedDate({ dateStr: publishedTime })}
        </p>
        {modifiedTime && (
          <p className="c-homework-hero__info-item">
            updated: {UtilService.getFormattedDate({ dateStr: modifiedTime })}
          </p>
        )}
        <p className="c-homework-hero__info-item">version: {version}</p>
      </div>

      <Image path={path} index={index} alt={title || ''} height="540" />

      <style jsx global>
        {style}
      </style>
    </section>
  );
};
