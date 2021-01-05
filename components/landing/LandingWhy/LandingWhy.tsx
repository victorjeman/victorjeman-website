import * as React from 'react';

import { ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';
import { ReadingLinks } from '@components/common/ReadingLinks/ReadingLinks';

import style from './LandingWhy.style';

export const LandingWhy = (): JSX.Element => (
  <section className="c-landing-why">
    <Container type={ISizeModifier.small}>
      <h2 className="c-landing-why__title">What I'm up to?</h2>

      <h3 className="c-landing-why__subtitle c-landing-why__subtitle--main">I want to help you</h3>

      <p className="c-landing-why__text">
        <strong className="c-landing-why__subtitle">Why?</strong>
        <br />I believe that everyone deserves a chance to <strong>improve</strong>.
      </p>

      <p className="c-landing-why__text">
        <strong className="c-landing-why__subtitle">How?</strong>
        <br /> Interesting ideas must be shared and enjoyed <strong>together</strong>.
      </p>

      <p className="c-landing-why__text">
        <strong className="c-landing-why__subtitle">What?</strong> <br />
        Articles about web development that will make your brain happy. Homework that will put to
        the test your <strong>skills</strong>.
        <br />
        <br />
        Check them out; you'll find something interesting in there.
      </p>
    </Container>

    <ReadingLinks />

    <style jsx>{style}</style>
  </section>
);
