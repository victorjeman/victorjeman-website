import * as React from 'react';

import { Container } from '@components/common/Container/Container';

import style from './TestimonialsIntro.style';

export const TestimonialsIntro: React.FC = (): JSX.Element => (
  <header className="c-testimonials-intro ">
    <h1 className="c-testimonials-intro__title">Testimonials</h1>
    <p className="c-testimonials-intro__text">
      It's good for the business if people are saying nice things about you
    </p>

    <style jsx>{style}</style>
  </header>
);
