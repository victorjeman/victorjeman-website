import * as React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Sticky from 'react-sticky-el';

import { ISizeModifier } from '@types';
import { MEDIA } from 'common/settings/media.settings';
import { useWindowSize } from '@hooks/useWindowSize';

import { Container } from '@components/common/Container/Container';
import { Markdown } from '@components/common/Markdown/Markdown';
import { ClientOnly } from '@components/common/ClientOnly/ClientOnly';

import style from './PostContent.style';

interface Props {
  content: string;
}

export const PostContent = ({ content }: Props): JSX.Element => {
  const isXLargeUp = useMediaQuery(MEDIA.XLARGE_UP);
  useWindowSize();
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
      <Container type={ISizeModifier.xlarge} padding="0">
        <aside className="c-post-content__left">
          {isXLargeUp ? (
            <ClientOnly>
              <Sticky>
                <Markdown content={tableOfContent} />
              </Sticky>
            </ClientOnly>
          ) : (
            <ClientOnly>
              <Markdown content={tableOfContent} />
            </ClientOnly>
          )}
        </aside>

        <section className="c-post-content__right">
          <Markdown content={postContent || content} />
        </section>
      </Container>

      <style jsx global>
        {style}
      </style>
    </section>
  );
};
