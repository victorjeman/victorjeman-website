import * as React from 'react';
import marked from 'marked';

import CodeStyle from '@styles/Code.style';

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

export const Markdown = ({ content }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <div
        dangerouslySetInnerHTML={{
          __html: `${marked(content)}`,
        }}
      ></div>
      <style jsx global>
        {CodeStyle}
      </style>
    </React.Fragment>
  );
};
