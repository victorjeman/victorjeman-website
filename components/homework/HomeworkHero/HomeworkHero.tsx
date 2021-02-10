import * as React from 'react';

import { ISizeModifier, IHomework } from '@types';

import { Container } from '@components/common/Container/Container';
import { Image } from '@components/common/Image/Image';
import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';

import style from './HomeworkHero.style';

interface Props {
  homework: IHomework;
}

export const HomeworkHero = ({ homework }: Props): JSX.Element => {
  const { content, data } = homework;
  const { published, updated, title, thumbnail } = data;
  const path = thumbnail.slice(0, thumbnail.length - 1);
  const index = Number(thumbnail.slice(thumbnail.length - 1, thumbnail.length));

  return (
    <section className="c-homework-hero">
      <Container type={ISizeModifier.large}>
        <h1 className="c-homework-hero__title">{data.title}</h1>
      </Container>

      <CardSpecial type={ISizeModifier.medium}>
        <Image path={path} index={index} alt={title} />
      </CardSpecial>
      <style jsx>{style}</style>
    </section>
  );
};
