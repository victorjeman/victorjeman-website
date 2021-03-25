// @ts-nocheck
import * as React from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Image } from '@components/common/Image/Image';

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

    return <SyntaxHighlighter style={solarizedLight} language={language} children={value} />;
  },
};

export const Markdown = ({ content }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <ReactMarkdownWithHtml renderers={renderers} children={content} allowDangerousHtml />

      <style jsx global>{`
        pre {
          line-height: 1.45 !important;
          font-size: 14px;
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </React.Fragment>
  );
};
