import * as React from 'react';

import { PageFooter } from '@components/common/PageFooter/PageFooter';
import { PageHeader } from '@components/common/PageHeader/PageHeader';
import { PageNavigation } from '@components/common/PageNavigation/PageNavigation';

import style from './PageLayout.style';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const PageLayout: React.FC<Props> = ({ children, title }: Props): JSX.Element => {
  return (
    <React.Fragment>
      <PageHeader title={title} />

      <PageNavigation />

      <main>{children}</main>

      <PageFooter />

      <style jsx>{style}</style>
    </React.Fragment>
  );
};
