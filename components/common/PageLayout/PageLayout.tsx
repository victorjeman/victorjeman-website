import * as React from 'react';
import { useRouter } from 'next/router';

import { PageFooter } from '@components/common/PageFooter/PageFooter';
import { PageHeader } from '@components/common/PageHeader/PageHeader';
import { PageNavigation } from '@components/common/PageNavigation/PageNavigation';

import style from './PageLayout.style';

interface Props {
  children: React.ReactNode;
}

export const PageLayout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const router = useRouter();

  return (
    <React.Fragment>
      <PageHeader />
      <PageNavigation />

      <main>{children}</main>

      <PageFooter />

      <style jsx>{style}</style>
    </React.Fragment>
  );
};
