import { PageLayout } from '../components/PageLayout/PageLayout';
import { LandingHero } from '../components/LandingHero/LandingHero';
import { LandingProject } from '../components/LandingProject/LandingProject';

export default function Home() {
  return (
    <PageLayout>
      <LandingHero />
      <LandingProject />
    </PageLayout>
  );
}
