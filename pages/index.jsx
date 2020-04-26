import { LandingHero } from '../components/LandingHero/LandingHero';
import { LandingProject } from '../components/LandingProject/LandingProject';
import { PageFooter } from '../components/PageFooter/PageFooter';
import { PageNavigation } from '../components/PageNavigation/PageNavigation';
import { ProjectHero } from '../components/ProjectHero/ProjectHero';

export default function Home() {
  return (
    <section>
      <LandingHero />
      <LandingProject />
      <PageFooter />
      <PageNavigation />
      <ProjectHero />
    </section>
  );
}
