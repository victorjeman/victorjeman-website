import * as React from 'react';
import { useRouter } from 'next/router';

import { PageHeader } from '../PageHeader/PageHeader';
import { PageNavigation } from '../PageNavigation/PageNavigation';
import { PageFooter } from '../PageFooter/PageFooter';
import { LandingHero } from '../../components/LandingHero/LandingHero';
import { LandingHeroGradient } from '../../components/LandingHeroGradient/LandingHeroGradient';
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
