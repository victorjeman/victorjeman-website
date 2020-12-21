// @ts-nocheck
import * as React from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

import { Image } from '@components/common/Image/Image';

import CodeStyle from '@styles/Code.style';

interface Props {
  content: string;
}

const renderers = {
  code: ({ language, value }: { language: string; value: string }) => {
    if (language === 'Image') {
      const info = value.split('|');
      const src = info[0];
      const alt = info[1];
      const width = info[2];
      const height = info[3];
      return <Image path="quiz" index={src} alt={alt} />;
    }
  },
};

export const Markdown = ({ content }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <ReactMarkdownWithHtml renderers={renderers} children={content} allowDangerousHtml />

      <style jsx global>
        {CodeStyle}
      </style>
    </React.Fragment>
  );
};
