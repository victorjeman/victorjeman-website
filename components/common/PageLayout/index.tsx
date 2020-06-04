import * as React from 'react';
import { useRouter } from 'next/router';

import { PageHeader } from '@components/common/PageHeader';
import { PageNavigation } from '@components/common/PageNavigation';
import { PageFooter } from '@components/common/PageFooter';
import { LandingHero } from '@components/landing/LandingHero';
import { LandingHeroGradient } from '@components/landing/LandingHeroGradient';
import PageLayoutStyle from './PageLayout.style';

interface Props {
  children: React.ReactNode;
}

export const PageLayout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <PageHeader />

      {router.pathname === '/' && (
        <LandingHeroGradient>
          <PageNavigation />
          <LandingHero />
        </LandingHeroGradient>
      )}

      {router.pathname !== '/' && <PageNavigation />}

      {children}

      <PageFooter />

      <style jsx>{PageLayoutStyle}</style>
    </React.Fragment>
  );
};
