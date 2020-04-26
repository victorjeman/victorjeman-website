import fs from 'fs';
import path from 'path';

import { PageLayout } from '../../components/PageLayout/PageLayout';
import { ProjectTestimonial } from '../../components/ProjectTestimonial/ProjectTestimonial';

export default function EgnlishAttack({ project }) {
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
  const filePath = path.join(process.cwd(), 'data/projects/englishattack.json');
  const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      project,
    },
  };
}
