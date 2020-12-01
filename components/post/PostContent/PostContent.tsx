import * as React from 'react';
import readingTime from 'reading-time';

import { Markdown } from '@components/common/Markdown/Markdown';

import style from './PostContent.style';

interface Props {
  content: string;
}

export const PostContent = ({ content }: Props): JSX.Element => {
  const reading = readingTime(content);

  return (
    <section className="c-post-content">
      <p className="c-post-content__reading-time">{reading.text}</p>

      <Markdown content={content} />

      <style jsx global>
        {style}
      </style>
    </section>
  );
};
