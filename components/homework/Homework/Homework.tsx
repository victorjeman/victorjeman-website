import * as React from 'react';

import { ISizeModifier, IHomework } from '@types';

import { Container } from '@components/common/Container/Container';
import { HomeworkContent } from '@components/homework/HomeworkContent/HomeworkContent';
import { HomeworkHero } from '@components/homework/HomeworkHero/HomeworkHero';

interface Props {
  homework: IHomework;
}

export const Homework = ({ homework }: Props): JSX.Element => (
  <Container type={ISizeModifier.large}>
    <HomeworkHero data={homework.data} />
    <HomeworkContent content={homework.content} />
  </Container>
);
