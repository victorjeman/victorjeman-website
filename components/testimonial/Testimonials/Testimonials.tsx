import * as React from 'react';

import { ITestimonials } from '@types';
import { Testimonial } from '@components/testimonial/Testimonial/Testimonial';

import style from './Testimonials.style';

export const Testimonials: React.FC<ITestimonials> = ({
  testimonials,
}: ITestimonials): JSX.Element => (
  <React.Fragment>
    {testimonials.map((testimonial, index) => (
      <Testimonial {...testimonial} key={`testimonial-${index}`} />
    ))}
    <style jsx>{style}</style>
  </React.Fragment>
);
