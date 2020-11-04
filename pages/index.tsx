import * as React from 'react';
import fs from 'fs';
import path from 'path';

import { ILandingProject } from '@types';

import { LandingHero } from '@components/landing/LandingHero/LandingHero';
import { LandingProject } from '@components/landing/LandingProject/LandingProject';
import { LandingProjectsIntro } from '@components/landing/LandingProjectsIntro/LandingProjectsIntro';
import { LandingWhy } from '@components/landing/LandingWhy/LandingWhy';
import { PageLayout } from '@components/common/PageLayout/PageLayout';

interface Props {
  landingProjects: ILandingProject[];
}

export default function Home({ landingProjects }: Props): React.ReactNode {
  return (
    <PageLayout>
      <LandingHero />

      <LandingProjectsIntro />

      <div className="[ js-first-project ]">{''}</div>

      {landingProjects.map((project, index) => (
        <LandingProject key={index} {...project} />
      ))}

      <LandingWhy />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const projectDirectory = path.join(process.cwd(), 'data/projects');
  const filenames = fs.readdirSync(projectDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  });

  const projectsSorted = projects.sort((a, b) => a.order - b.order);

  const landingProjects: ILandingProject[] = projectsSorted.map(
    (
      {
        title,
        role,
        illustration,
        duration,
        href,
        divider,
        description,
        investigate,
        technologies,
      }: ILandingProject,
      index,
    ) => ({
      index,
      isLast: index === projectsSorted.length - 1,
      title,
      role,
      illustration,
      duration,
      href,
      divider,
      description,
      investigate,
      technologies,
    }),
  );

  return {
    props: {
      landingProjects: landingProjects,
    },
  };
}
