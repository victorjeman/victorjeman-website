import * as React from 'react';

import { Markdown } from '@components/common/Markdown/Markdown';

import style from './PostContent.style';

interface Props {
  content: string;
}

export const PostContent = ({ content }: Props): JSX.Element => {
  let tableOfContent = '';
  let postContent = '';

  try {
    tableOfContent = content
      .split('<section class="c-table-of-content-section">')[1]
      .split('<section>')[0];

    postContent = content
      .split('<section class="c-table-of-content-section">')[1]
      .split('<section>')[1];
  } catch (error) {}

  return (
    <section className="c-post-content">
      {tableOfContent && <Markdown content={tableOfContent} />}

      <Markdown content={postContent || content} />

      <style jsx global>
        {style}
      </style>
    </section>
  );
};
