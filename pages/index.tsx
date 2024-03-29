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
        title={'Victor JEMAN | Front-End Enthusiast'}
        description={'I do a little bit of web development and I love sharing my knowledge.'}
        openGraph={{
          url: 'https://victorjeman.com',
          title: 'Victor JEMAN | Front-End Enthusiast',
          description: 'I do a little bit of web development and I love sharing my knowledge.',
          images: [
            {
              url: 'https://victorjeman.com/images/blog/heroes/hero-1.jpg',
              width: 970,
              height: 634,
              alt:
                'A man writes hello at a keyboard with a cat to the left and a flower to the right',
            },
          ],
          site_name: 'VictorJeman',
        }}
        twitter={{
          handle: '@victorjeman',
          site: '@victorjeman',
          cardType: 'summary_large_image',
        }}
      />

      <LandingHero />

      <LandingPowerLevel />

      <LandingWhy />
    </PageLayout>
  );
}
