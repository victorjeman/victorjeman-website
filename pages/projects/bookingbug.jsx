import fs from 'fs';
import path from 'path';

import { ProjectTestimonial } from '../../components/ProjectTestimonial/ProjectTestimonial';

export default function Bookingbug({ project }) {
  return (
    <section className="c-projects">
      <h1>{project.title}</h1>

      <h2>Testimonials</h2>
      {project.testimonials.map((testimonial, index) => (
        <ProjectTestimonial key={index} {...testimonial} />
      ))}
    </section>
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
