import * as React from 'react';

import { ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';
import { Markdown } from '@components/common/Markdown/Markdown';

import style from './PostContent.style';

interface Props {
  content: string;
}

export const PostContent = ({ content }: Props): JSX.Element => {
  return (
    <section className="c-post-content">
      <Container type={ISizeModifier.small}>
        <Markdown content={content} />
        <style jsx global>
          {style}
        </style>
      </Container>
    </section>
  );
};
