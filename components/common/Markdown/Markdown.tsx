// @ts-nocheck
import * as React from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import Image from 'next/image';

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
      return <Image src={src} alt={alt} width={width} height={height} />;
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
