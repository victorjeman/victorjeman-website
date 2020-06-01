import fs from 'fs';
import path from 'path';
import * as React from 'react';

import { PageLayout } from '../../components/PageLayout/PageLayout';
import { ProjectThumbnail } from '../../components/ProjectThumbnail/ProjectThumbnail';
import { IProjectThumbnail } from '../../types';

interface Props {
  projectThumbnails: IProjectThumbnail[];
}

export default function Projects({ projectThumbnails }: Props): React.ReactNode {
  return (
    <PageLayout>
      <h2>Testimonials</h2>
      {projectThumbnails.map((thumbnail, index) => (
        <React.Fragment key={index}>
          <ProjectThumbnail {...thumbnail} />
        </React.Fragment>
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

  const projectThumbnails = projects.map((project) => ({
    title: project.title,
    href: project.href,
  }));

  return {
    props: {
      projectThumbnails,
    },
  };
}
