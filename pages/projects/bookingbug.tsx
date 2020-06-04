import fs from 'fs';
import path from 'path';

import { PageLayout } from '@components/common/PageLayout';
import { ProjectTestimonial } from '@components/project/ProjectTestimonial';
import { IProject } from '@types';

interface Props {
  project: IProject;
}

export default function Bookingbug({ project }: Props) {
  return (
    <PageLayout>
      <h1>{project.title}</h1>

      <h2>Testimonials</h2>
      {project.testimonials.map((testimonial, index) => (
        <ProjectTestimonial key={index} {...testimonial} />
      ))}
    </PageLayout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/projects/bookingbug.json');
  const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      project,
    },
  };
}
