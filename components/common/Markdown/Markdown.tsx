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
      const path = info[0];
      const index = info[1];
      const alt = info[2];
      const lazyLoad = !!info[3];
      return <Image path={path} index={index} alt={alt} lazyLoad={lazyLoad} />;
    }

    return <pre>{value}</pre>;
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
