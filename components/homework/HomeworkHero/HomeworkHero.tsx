import * as React from 'react';

import { ISizeModifier, IHomework } from '@types';

import { Container } from '@components/common/Container/Container';
import { Image } from '@components/common/Image/Image';

import style from './HomeworkHero.style';

interface Props {
  homework: IHomework;
}

export const HomeworkHero = ({ homework }: Props): JSX.Element => {
  const { content, data } = homework;
  const { created, version, updated, title, thumbnail } = data;
  const path = thumbnail ? thumbnail.slice(0, thumbnail.length - 1) : '';
  const index = thumbnail ? Number(thumbnail.slice(thumbnail.length - 1, thumbnail.length)) : 0;

  return (
    <section className="c-homework-hero">
      <Container type={ISizeModifier.large}>
        <h1 className="c-homework-hero__title">{data.title}</h1>

        <div className="c-homework-hero__info">
          <p className="c-homework-hero__info-item">created: {created}</p>
          {updated && <p className="c-homework-hero__info-item">updated: {updated}</p>}
          <p className="c-homework-hero__info-item">version: {version}</p>
        </div>
      </Container>

      <Image path={path} index={index} alt={title || ''} />

      <style jsx>{style}</style>
    </section>
  );
};
