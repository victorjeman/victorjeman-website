import * as React from 'react';

import { ITestimonial, ISizeModifier } from '@types';
import style from './Testimonial.style';

import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';
import { Container } from '@components/common/Container/Container';

export const Testimonial: React.FC<ITestimonial> = ({
  authorName,
  authorJob,
  authorCompany,
  authorLinkedin,
  content,
}: ITestimonial): JSX.Element => (
  <Container>
    <article className="c-testimonial">
      <CardSpecial type={ISizeModifier.large}>
        <div className="c-testimonial__container ">
          <h2 className="c-testimonial__author-name">{authorName}</h2>
          <p className="c-testimonial__author-info">
            <span className="c-testimonial__author-job">{authorJob}</span> at{' '}
            <span className="c-testimonial__author-company">{authorCompany}</span>
          </p>

          <a className="c-testimonial__author-linkedin" href={authorLinkedin}>
            LinkedIn
          </a>
          {content.map((text, index) => (
            <p
              className={`c-testimonial__text ${index === 0 ? 'c-testimonial__text--first' : ''}`}
              key={index}
            >
              {text}
            </p>
          ))}
        </div>
      </CardSpecial>
    </article>
    <style jsx>{style}</style>
  </Container>
);
