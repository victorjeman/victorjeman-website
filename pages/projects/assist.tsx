import fs from 'fs';
import path from 'path';

import { PageLayout } from '../../components/PageLayout/PageLayout';
import { ProjectDescription } from '../../components/ProjectDescription/ProjectDescription';
import { ProjectTestimonials } from '../../components/ProjectTestimonials/ProjectTestimonials';
import { IProject } from '../../types';

interface Props {
  project: IProject;
}

export default function Assist({ project }: Props) {
  return (
    <PageLayout>
      <h1>{project.title}</h1>

      <ProjectDescription description={project.description1} />

      <ProjectDescription description={project.description2} />

      <ProjectTestimonials testimonials={project.testimonials} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/projects/assist.json');
  const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      project,
    },
  };
}
