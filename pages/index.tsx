import * as React from 'react';
import { NextSeo } from 'next-seo';

import { LandingHero } from '@components/landing/LandingHero/LandingHero';
import { LandingPowerLevel } from '@components/landing/LandingPowerLevel/LandingPowerLevel';
import { LandingWhy } from '@components/landing/LandingWhy/LandingWhy';
import { PageLayout } from '@components/common/PageLayout/PageLayout';

export default function Home(): React.ReactNode {
  return (
    <PageLayout>
      <NextSeo
        title={'Victor JEMAN | Front-End Developer'}
        description={'I do a little bit of web development and I love sharing my thoughts.'}
      />

      <LandingHero />

      <LandingPowerLevel />

      <LandingWhy />
    </PageLayout>
  );
}
