import * as React from 'react';

import { PageFooter } from '@components/common/PageFooter/PageFooter';
import { PageHeader } from '@components/common/PageHeader/PageHeader';
import { PageNavigation } from '@components/common/PageNavigation/PageNavigation';

import style from './PageLayout.style';

interface Props {
  children: React.ReactNode;
}

export const PageLayout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <PageHeader />

      <PageNavigation />

      <main>{children}</main>

      <PageFooter />

      <style jsx global>
        {style}
      </style>
    </React.Fragment>
  );
};
