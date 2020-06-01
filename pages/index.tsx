import * as React from 'react';
import fs from 'fs';
import path from 'path';

import { PageLayout } from '@components/PageLayout/PageLayout';
import { LandingProject } from '@components/LandingProject/LandingProject';
import { ILandingProject } from '@types';

interface Props {
  landingProjects: ILandingProject[];
}

export default function Home({ landingProjects }: Props): React.ReactNode {
  return (
    <PageLayout>
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

  const landingProjects = projects.map((project) => ({
    title: project.title,
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
