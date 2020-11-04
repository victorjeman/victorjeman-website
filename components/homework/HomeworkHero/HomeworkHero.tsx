import * as React from 'react';

import { ISizeModifier, IHomeworkData } from '@types';

import { Container } from '@components/common/Container/Container';

import style from './HomeworkHero.style';

interface Props {
  data: IHomeworkData;
}

export const HomeworkHero = ({ data }: Props): JSX.Element => (
  <section className="c-homework-hero">
    <Container type={ISizeModifier.large}>
      <h1 className="c-homework-hero__title">{data.title}</h1>
    </Container>
    <style jsx>{style}</style>
  </section>
);
