import * as React from 'react';

import { ISizeModifier } from '@types';

import { Container } from '@components/common/Container/Container';

const TreasureMap = require('../../../public/images/random/treasure-map.svg') as string;
import style from './LandingWhy.style';

export const LandingWhy = (): JSX.Element => (
  <section className="c-landing-why">
    <Container type={ISizeModifier.small}>
      <div className="c-landing-why__icon">
        <TreasureMap />
      </div>

      <h2 className="c-landing-why__title">Why?</h2>

      <p className="c-landing-why__text">
        I want to move to the next level, but I don’t know yet what that means. I believe I could
        share some of my ideas with you, and this website will help me. I will start by exploring my
        brain and see what helpful thoughts we can extract from it. Check it out; maybe you will
        find something interesting in there.
      </p>
    </Container>
    <style jsx>{style}</style>
  </section>
);
