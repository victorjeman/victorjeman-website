import fs from 'fs';
import path from 'path';

import { ProjectTestimonial } from '../../components/ProjectTestimonial/ProjectTestimonial';

export default function ContentIq({ project }) {
  return (
    <section className="c-projects">
      <h2>{project.title}</h2>

      {project.testimonials.map((testimonial, index) => (
        <ProjectTestimonial key={index} {...testimonial} />
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/projects/contentiq.json');
  const project = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  return {
    props: {
      project,
    },
  };
}
