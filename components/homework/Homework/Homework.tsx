import * as React from 'react';

import { ISizeModifier, IHomework } from '@types';

import { Container } from '@components/common/Container/Container';
import { HomeworkContent } from '@components/homework/HomeworkContent/HomeworkContent';
import { HomeworkHero } from '@components/homework/HomeworkHero/HomeworkHero';

import style from './Homework.style';

interface Props {
  homework: IHomework;
}

export const Homework = ({ homework }: Props): JSX.Element => (
  <React.Fragment>
    <Container type={ISizeModifier.large}>
      <HomeworkHero homework={homework} />
    </Container>

    <HomeworkContent content={homework.content} />

    <style jsx>{style}</style>
  </React.Fragment>
);
