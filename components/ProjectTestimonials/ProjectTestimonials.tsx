import { ProjectTestimonial } from '../ProjectTestimonial/ProjectTestimonial';

export const ProjectTestimonials = ({ testimonials }) => (
  <section className="c-project-testimonials">
    <div className="c-project-testimonials__container">
      <h2 className="c-project-testimonials__title">Testimonials</h2>

      {testimonials.map((testimonial, index) => (
        <ProjectTestimonial key={index} {...testimonial} />
      ))}
    </div>
  </section>
);
