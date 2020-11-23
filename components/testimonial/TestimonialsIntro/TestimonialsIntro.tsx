import * as React from 'react';

import { Container } from '@components/common/Container/Container';

import style from './TestimonialsIntro.style';

export const TestimonialsIntro: React.FC = (): JSX.Element => (
  <header className="c-testimonials-intro ">
    <Container>
      <h1 className="c-testimonials-intro__title">Recommendations</h1>
      <p className="c-testimonials-intro__text">
        Some nice things people said about me. They are too kind.
      </p>
    </Container>
    <style jsx>{style}</style>
  </header>
);
