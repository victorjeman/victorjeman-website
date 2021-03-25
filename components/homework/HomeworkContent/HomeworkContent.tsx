import * as React from 'react';
import Sticky from 'react-sticky-el';
import { useMediaQuery } from '@react-hook/media-query';

import { ISizeModifier } from '@types';
import { MEDIA } from 'common/settings/media.settings';
import { useWindowSize } from '@hooks/useWindowSize';

import { Container } from '@components/common/Container/Container';
import { Markdown } from '@components/common/Markdown/Markdown';
import { ClientOnly } from '@components/common/ClientOnly/ClientOnly';
import { HomeworkFeedback } from '@components/homework/HomeworkFeedback/HomeworkFeedback';

import style from './HomeworkContent.style';

interface Props {
  content: string;
}

export const HomeworkContent = ({ content }: Props): JSX.Element => {
  const isXLargeUp = useMediaQuery(MEDIA.XLARGE_UP);
  useWindowSize();

  const tableOfContent = content
    .split('<section class="c-table-of-content-section">')[1]
    .split('<section>')[0];

  const labContent = content
    .split('<section class="c-table-of-content-section">')[1]
    .split('<section>')[1];

  return (
    <div className="c-homework-content">
      <Container type={ISizeModifier.xlarge} padding="0">
        <aside className="c-homework-content__left">
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

        <section className="c-homework-content__right">
          <Markdown content={labContent} />
          <HomeworkFeedback />
        </section>
      </Container>

      <style jsx global>
        {style}
      </style>
    </div>
  );
};
