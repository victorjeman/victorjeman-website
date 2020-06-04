import fs from 'fs';
import path from 'path';
import * as React from 'react';

import { PageLayout } from '@components/common/PageLayout';
import { ProjectDescription } from '@components/project/ProjectDescription';
import { ProjectTestimonials } from '@components/project/ProjectTestimonials';
import { IProject } from '@types';

interface Props {
  project: IProject;
}

export default function Assist({ project }: Props): React.ReactNode {
  return (
    <PageLayout>
      <h1>{project.title}</h1>

      <ProjectDescription description={project.description} />

      <ProjectDescription description={project.description} />

      <ProjectTestimonials testimonials={project.testimonials} />
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const filePath = path.join(process.cwd(), 'data/projects/assist.json');
  const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      project,
    },
  };
}
