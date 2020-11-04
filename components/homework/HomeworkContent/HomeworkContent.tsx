import * as React from 'react';

import { ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';
import { Markdown } from '@components/common/Markdown/Markdown';

import style from './HomeworkContent.style';
import CodeStyle from '@styles/Code.style';

interface Props {
  content: string;
}

export const HomeworkContent = ({ content }: Props): JSX.Element => {
  return (
    <Container type={ISizeModifier.small}>
      <div className="c-homework-content">
        <Markdown content={content} />
      </div>

      <style jsx global>
        {style}
      </style>

      <style jsx global>
        {CodeStyle}
      </style>
    </Container>
  );
};
