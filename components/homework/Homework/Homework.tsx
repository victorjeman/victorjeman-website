import * as React from 'react';

import { ISizeModifier, IHomework } from '@types';

import { Container } from '@components/common/Container/Container';
import { Socials } from '@components/common/Socials/Socials';
import { HomeworkContent } from '@components/homework/HomeworkContent/HomeworkContent';
import { HomeworkHero } from '@components/homework/HomeworkHero/HomeworkHero';

import style from './Homework.style';

interface Props {
  homework: IHomework;
}

export const Homework = ({ homework }: Props): JSX.Element => {
  const title = homework.data.title || '';
  const shareUrl = `https://victorjeman.com/labs/${homework.data.slug}`;

  return (
    <React.Fragment>
      <Container type={ISizeModifier.xlarge} padding="0">
        <HomeworkHero homework={homework} />

        <Socials title={title} shareUrl={shareUrl} />
      </Container>

      <HomeworkContent content={homework.content} />

      <style jsx>{style}</style>
    </React.Fragment>
  );
};
