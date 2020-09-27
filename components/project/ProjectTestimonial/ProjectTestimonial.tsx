import * as React from 'react';

import style from './ProjectTestimonial.style';

interface Props {
  illustration: string;
  alt: string;
  text: string;
  author: string;
}

export const ProjectTestimonial: React.FC<Props> = ({
  illustration,
  alt,
  text,
  author,
}: Props): JSX.Element => (
  <article className="c-project-testimonial">
    <img className="c-project-testimonial__illustration" src={illustration} alt={alt} />
    <p className="c-project-testimonial__author">{author}</p>
    <p className="c-project-testimonial__text">{text}</p>
    <style jsx>{style}</style>
  </article>
);
