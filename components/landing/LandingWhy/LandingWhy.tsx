import * as React from 'react';

import { ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';
import { ReadingLinks } from '@components/common/ReadingLinks/ReadingLinks';

const TreasureMap = require('../../../public/images/random/treasure-map.svg') as string;
import style from './LandingWhy.style';

export const LandingWhy = (): JSX.Element => (
  <section className="c-landing-why">
    <Container type={ISizeModifier.small}>
      {/* <div className="c-landing-why__icon">
        <TreasureMap />
      </div> */}

      <h2 className="c-landing-why__title">What's the point?</h2>

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
        Articles about web development that will make your brain
        <strong> happy</strong>. Homework that will put your <strong>skill</strong> to the test.
        Check them out; you will find something <strong>interesting</strong> in there.
      </p>
    </Container>

    <ReadingLinks />

    <style jsx>{style}</style>
  </section>
);
