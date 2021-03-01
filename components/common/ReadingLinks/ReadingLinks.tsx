import * as React from 'react';

import { ISizeModifier } from 'types';

import { Container } from '@components/common/Container/Container';
import { Explore } from '@components/common/Explore/Explore';

import style from './ReadingLinks.style';

export const ReadingLinks = (): JSX.Element => {
  return (
    <Container type={ISizeModifier.small}>
      <ul className="c-reading-links">
        <li className="c-reading-links__item">
          <Explore type="anchor" href="/blog">
            Blog
          </Explore>
        </li>

        {/* <li className="c-reading-links__item">
          <Explore type="anchor" href="/tips">
            Tips
          </Explore>
        </li> */}

        <li className="c-reading-links__item">
          <Explore type="anchor" href="/labs">
            Labs
          </Explore>
        </li>
      </ul>

      <style jsx>{style}</style>
    </Container>
  );
};
