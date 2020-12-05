import * as React from 'react';

import { Markdown } from '@components/common/Markdown/Markdown';

import style from './PostContent.style';

interface Props {
  content: string;
}

export const PostContent = ({ content }: Props): JSX.Element => {
  return (
    <section className="c-post-content">
      <Markdown content={content} />

      <style jsx global>
        {style}
      </style>
    </section>
  );
};
