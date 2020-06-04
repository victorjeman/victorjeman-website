import fs from 'fs';
import path from 'path';

import { PageLayout } from '@components/common/PageLayout';
import { ProjectTestimonial } from '@components/project/ProjectTestimonial';
import { IProject } from '@types';

interface Props {
  project: IProject;
}

export default function GpsAssist({ project }: Props) {
  return (
    <PageLayout>
      <h2>{project.title}</h2>

      {project.testimonials.map((testimonial, index) => (
        <ProjectTestimonial key={index} {...testimonial} />
      ))}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/projects/gpsassist.json');
  const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      project,
    },
  };
}
