import * as React from 'react';
import marked from 'marked';

import { ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';

import style from './PostContent.style';
import CodeTheme from './CodeTheme.style';

interface Props {
  content: string;
}

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, language) {
    const hljs = require('highlight.js');
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return hljs.highlight(validLanguage, code).value;
  },
});

export const PostContent = ({ content }: Props): JSX.Element => {
  console.log('content: ', content);
  return (
    <Container type={ISizeModifier.small}>
      <div
        className="c-post-content"
        dangerouslySetInnerHTML={{
          __html: `${marked(content)}`,
        }}
      ></div>

      <style jsx global>
        {style}
      </style>
      <style jsx global>
        {CodeTheme}
      </style>
    </Container>
  );
};
