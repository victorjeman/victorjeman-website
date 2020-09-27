import * as React from 'react';

import { ProjectTestimonial } from '../ProjectTestimonial/ProjectTestimonial';

interface Props {
  testimonials: [
    {
      illustration: string;
      alt: string;
      text: string;
      author: string;
    },
  ];
}

export const ProjectTestimonials: React.FC<Props> = ({ testimonials }: Props): JSX.Element => (
  <section className="c-project-testimonials">
    <div className="c-project-testimonials__container">
      <h2 className="c-project-testimonials__title">Testimonials</h2>

      {testimonials.map((testimonial, index) => (
        <ProjectTestimonial key={index} {...testimonial} />
      ))}
    </div>
  </section>
);
