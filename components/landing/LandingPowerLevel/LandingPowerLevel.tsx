import * as React from 'react';

import { ISizeModifier } from '@types';

import { Explore } from '@components/common/Explore/Explore';
import { CardSpecial } from '@components/common/CardSpecial/CardSpecial';
import { Container } from '@components/common/Container/Container';
import { Image } from '@components/common/Image/Image';

import style from './LandingPowerLevel.style';

export const LandingPowerLevel: React.FC = (): JSX.Element => (
  <section className="c-landing-power-level">
    <Container type={ISizeModifier.medium}>
      <div className="c-landing-power-level__container" id="power-level">
        <h2 className="c-landing-power-level__title [ u-show-small-only ]">It's over 9000 ... </h2>

        <CardSpecial type={ISizeModifier.large}>
          <h2 className="c-landing-power-level__title [ u-show-medium-up ]">It's over 9000 ... </h2>

          <div className="c-landing-power-level__illustration">
            <Image path="skills" index={1} alt="Victor's power level is over 900" />
          </div>
        </CardSpecial>

        <div className="c-landing-power-level__description">
          <p className="c-landing-power-level__text">
            At my core, I'm a <strong>front-end developer</strong>. I've started{' '}
            {new Date().getFullYear() - 2012} years ago as a freelancer by stitching together static
            websites, then I got a full time job and started working with all kinds of fancy
            libraries and frameworks. I can't say that I know any of them at the master level, but
            I'm quite flexible at this point and can easily catch on with new things.
          </p>

          <p className="c-landing-power-level__text">
            At the moment I could say I’m still working with static websites, though the
            technologies and the whole process behind them are different and so extraordinary. It's
            interesting how some things stay classy and powerful through time.
          </p>

          <p className="c-landing-power-level__text">
            I'm trying to be <strong>open-minded</strong> and optimistic about challenges. For a
            project, I've even done automated tests with webdriver.io and created a container for
            those tests after learning the basics in a couple of days. I had to? Not really, but it
            was nice that I can help.
            <br />
            <br /> <strong>P.S.</strong> Initially, the docker setup was somewhat embarrassing to
            look at, but it's working alright now.
          </p>
        </div>

        <div className="c-landing-power-level__explore">
          <Explore modifier={ISizeModifier.medium} type="anchor" href="/projects">
            Peek at some of my projects
          </Explore>
        </div>
      </div>
    </Container>
    <style jsx>{style}</style>
  </section>
);
