import * as React from 'react';

import { LandingHero } from '@components/landing/LandingHero/LandingHero';
import { LandingPowerLevel } from '@components/landing/LandingPowerLevel/LandingPowerLevel';
import { LandingWhy } from '@components/landing/LandingWhy/LandingWhy';
import { PageLayout } from '@components/common/PageLayout/PageLayout';

export default function Home(): React.ReactNode {
  return (
    <PageLayout title={'Victor JEMAN'}>
      <LandingHero />

      <LandingPowerLevel />

      <LandingWhy />
    </PageLayout>
  );
}
