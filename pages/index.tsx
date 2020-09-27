import * as React from 'react';
import fs from 'fs';
import path from 'path';

import { ILandingProject } from '@types';

import { LandingProject } from '@components/landing/LandingProject/LandingProject';
import { LandingProjectsIntro } from '@components/landing/LandingProjectsIntro/LandingProjectsIntro';
import { PageLayout } from '@components/common/PageLayout/PageLayout';

interface Props {
  landingProjects: ILandingProject[];
}

export default function Home({ landingProjects }: Props): React.ReactNode {
  return (
    <PageLayout>
      <LandingProjectsIntro />

      <div className="[ js-first-project ]">{}</div>

      {landingProjects.map((project, index) => (
        <LandingProject key={index} {...project} />
      ))}
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

  const landingProjects: ILandingProject[] = projectsSorted.map((project, index) => ({
    index,
    isLast: index === projectsSorted.length - 1,
    title: project.title,
    role: project.role,
    illustration: project.illustration,
    duration: project.duration,
    href: project.href,
    divider: project.divider,
    description: project.description,
  }));

  return {
    props: {
      landingProjects: landingProjects,
    },
  };
}
