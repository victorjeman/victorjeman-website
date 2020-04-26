import fs from 'fs';
import path from 'path';

import { PageLayout } from '../components/PageLayout/PageLayout';
import { LandingHero } from '../components/LandingHero/LandingHero';
import { LandingProject } from '../components/LandingProject/LandingProject';

export default function Home({ landingProjects }) {
  return (
    <PageLayout>
      <LandingHero />

      {landingProjects.map((project, index) => (
        <LandingProject key={index} {...project} />
      ))}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projectDirectory = path.join(process.cwd(), 'data/projects');
  const filenames = fs.readdirSync(projectDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  });

  const landingProjects = projects.map((project) => ({
    title: project.title,
    illustration: project.illustration,
    duration: project.duration,
    href: project.href,
  }));

  return {
    props: {
      landingProjects,
    },
  };
}
