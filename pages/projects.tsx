import * as React from 'react';
import fs from 'fs';
import path from 'path';

import { IProject } from '@types';

import { FONT } from 'common/settings/font.settings';

import { PageLayout } from '@components/common/PageLayout/PageLayout';
import { ReadingLinks } from '@components/common/ReadingLinks/ReadingLinks';
import { Project } from '@components/project/Project/Project';

interface Props {
  projects: IProject[];
}

export default function Projects({ projects }: Props): React.ReactNode {
  return (
    <PageLayout title={'My projects'}>
      <div className="c-projects">
        <div className="[ js-first-project ]">{''}</div>

        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}

        <h3 className="c-projects-continue">Continue the exploration</h3>

        <ReadingLinks />
      </div>

      <style jsx>
        {`
          .c-projects {
            padding-bottom: 6rem;
          }

          .c-projects-continue {
            text-align: center;
            font-size: 2.5rem;
            margin-top: 1rem;
            margin-bottom: 3rem;
            font-family: ${FONT.MERRIWEATHER};
          }
        `}
      </style>
    </PageLayout>
  );
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const projectDirectory = path.join(process.cwd(), 'data/projects');
  const filenames = fs.readdirSync(projectDirectory);

  const read = (filename: string) => {
    const filePath = path.join(projectDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent);
  };

  const sort = (a: { order: number }, b: { order: number }) => a.order - b.order;

  const createProjects = (
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
    }: IProject,
    index: number,
  ) => ({
    index,
    title,
    role,
    illustration,
    duration,
    href,
    divider,
    description,
    investigate,
    technologies,
  });

  const projects: IProject[] = filenames.map(read).sort(sort).map(createProjects);

  return {
    props: {
      projects: projects,
    },
  };
}
